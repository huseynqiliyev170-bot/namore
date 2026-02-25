import ThemeLayout from "@layouts/ThemeLayout";
import { notFound } from 'next/navigation';

import { getPosts, getTotalPostsCount, getPopularPosts, getRecommendedPosts } from "@library/blog-apis";
import { getBlock, getPageBlog } from "@library/pages-apis";

import PageIntro from "@components/page/PageIntro";
import BlogGrid from '@components/blog/BlogGrid';
import PopularPostsSection from '@components/sections/PopularPosts';
import SubscribeSection from '@components/sections/Subscribe';
import RecommendedPostsSlider from '@components/sliders/RecommendedPosts';

import { getConfigStrings, getConfigSettings, getConfigHeader, getConfigFooter } from "@library/config-apis";

export async function generateMetadata() {
  const pageData = await getBlogPageData();
  
  return {
      title: pageData.title,
  }
}

async function Blog( { searchParams } ) {
  const configSettings = await getConfigSettings();
  const configStrings = await getConfigStrings();
  const header = await getConfigHeader();
  const footer = await getConfigFooter();
  const limit = configSettings.postsPerPage;
  const currentPage = parseInt((await searchParams).page) || 1;
  const posts = await getPosts(currentPage, limit);
  const popularPosts = await getPopularPosts();
  const recommendedPosts = await getRecommendedPosts();
  const total = await getTotalPostsCount();
  const pageData = await getBlogPageData();
  const block_blog_featured = await getBlock(pageData.featuredPosts, 'block_blog_featured');
  const block_subscribe = await getBlock(pageData.subscribe, 'block_subscribe');
  const block_blog_recommend = await getBlock(pageData.recommendedPosts, 'block_blog_recommend');

  return (
    <ThemeLayout strings={configStrings} settings={configSettings} headerData={header} footerData={footer}>
      <PageIntro title={pageData.intro_title} short_title={pageData.short_title} />

      {block_blog_featured &&
      <PopularPostsSection posts={popularPosts} {...block_blog_featured} />
      }

      <BlogGrid 
        posts={posts} 
        subtitle={pageData.grid_subtitle}
        title={pageData.grid_title}
        text={pageData.grid_text}
        total={total}
        limit={limit}
        page={currentPage}
      />

      {block_subscribe &&
      <SubscribeSection {...block_subscribe} />
      }

      {block_blog_recommend &&
      <RecommendedPostsSlider posts={recommendedPosts} {...block_blog_recommend} />
      }
    </ThemeLayout>
  );
};
export default Blog;

async function getBlogPageData() {
  const pageData = await getPageBlog()
  
  if ( !pageData ) {
    notFound()
  } else {
    return pageData
  }
}