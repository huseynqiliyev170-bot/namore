import ThemeLayout from "@layouts/ThemeLayout";
import { notFound } from 'next/navigation';

import { getPage, getAllPageSlugs } from "@library/pages-apis";
import { getAllServices } from "@library/services-apis";
import { getFeaturedRoomTypes } from "@library/rooms-apis";
import { getPosts } from "@library/blog-apis";
import { getConfigStrings, getConfigSettings, getConfigHeader, getConfigFooter } from "@library/config-apis";

import PageBlocks from "@components/page/PageBlocks";

export async function generateMetadata({ params }) {
  const pageData = await getSinglePageData(params);
  
  return {
    title: pageData.title,
  }
}

async function Home1( { params } ) {
  const pageData = await getSinglePageData(params);
  const configStrings = await getConfigStrings();
  const configSettings = await getConfigSettings();
  const header = await getConfigHeader();
  const footer = await getConfigFooter();
  const pageCollections = [];

  if ( pageData.blocks.some(e => e.collection == 'block_services') ) {
    pageCollections['services'] = await getAllServices();
  }
  if ( pageData.blocks.some(e => e.collection == 'block_services') ) {
    pageCollections['featured_rooms'] = await getFeaturedRoomTypes(configSettings.roomsFeaturedSectionLimit);
  }
  if ( pageData.blocks.some(e => e.collection == 'block_latest_posts') ) {
    pageCollections['latest_posts'] = await getPosts(1, configSettings.postsLatestSectionLimit);
  }

  return (
    <ThemeLayout strings={configStrings} settings={configSettings} headerData={header} footerData={footer}>
      <PageBlocks blocks={pageData.blocks} collections={pageCollections} />
    </ThemeLayout>
  );
};
export default Home1;

export async function generateStaticParams() {
  const pages = await getAllPageSlugs()

  return pages.map((page) => ({
    slug: page.slug
  }))
}

async function getSinglePageData(params) {
  const pageData = await getPage((await params).slug)
  
  if ( !pageData ) {
    notFound()
  } else {
    return pageData
  }
}