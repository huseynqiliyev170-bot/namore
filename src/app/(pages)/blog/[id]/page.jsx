import { notFound } from 'next/navigation';

import ThemeLayout from "@layouts/ThemeLayout";

import PageIntro from "@components/page/PageIntro";
import RecommendedPostsSlider from '@components/sliders/RecommendedPosts';
import PostComments from "@components/post/PostComments";

import { getConfigSettings, getConfigStrings, getConfigHeader, getConfigFooter } from "@library/config-apis";
import { getRecommendedPosts, getPostData, getAllPostSlugs, getPostComments, getTotalPostCommentsCount } from "@library/blog-apis";
import { getBlock, getPageBlog } from "@library/pages-apis";
import { getDirectusImageURL } from "@library/directus-image";

import Date from '@library/date';

import Link from "next/link";
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const postData = await getSinglePostData(params);
  const pageBlogData = await getPageBlog();

  return {
      title: postData.name + " | " + pageBlogData.title,
  }
}

async function PostDetail( { params } ) {
  const configSettings = await getConfigSettings();
  const configStrings = await getConfigStrings();
  const header = await getConfigHeader();
  const footer = await getConfigFooter();
  const postData = await getSinglePostData(params);
  const recommendedPosts = await getRecommendedPosts();
  const pageBlogData = await getPageBlog();
  const block_blog_recommend = await getBlock(pageBlogData.singleRecommendedPosts, 'block_blog_recommend');
  const comments = await getPostComments(postData.id);
  const total_comments = await getTotalPostCommentsCount(postData.id);

  return (
    <ThemeLayout strings={configStrings} settings={configSettings} headerData={header} footerData={footer}>
      <PageIntro title={postData.name} short_title={configStrings.publication} />

      {/* publication */}
      <div className="mil-pub-frame">
          <div className="mil-pub-cover">
              <Image src={getDirectusImageURL(postData.full_image ? postData.full_image : postData.image)} fill sizes="100vw" alt={postData.name} />
          </div>

          <div className="container mil-p-100-100">
              <div className="row justify-content-center">
                  <div className="col-xl-7">
                      <div className="mil-text mil-mb-40 mil-fade-up" dangerouslySetInnerHTML={{__html : postData.content}} />
                      
                      <div className="mil-divider mil-mb-100"></div>

                      <PostComments postId={postData.id} comments={comments} total={total_comments} />
                  </div>
              </div>
          </div>
      </div>
      {/* publication end */}

      {block_blog_recommend &&
      <RecommendedPostsSlider posts={recommendedPosts} {...block_blog_recommend} />
      }
    </ThemeLayout>
  );
};
export default PostDetail;

export async function generateStaticParams() {
  const posts = await getAllPostSlugs()

  return posts.map((post) => ({
    id: post.slug
  }))
}

async function getSinglePostData(params) {
  const postData = await getPostData((await params).id)
  
  if ( !postData ) {
    notFound()
  } else {
    return postData
  }
}