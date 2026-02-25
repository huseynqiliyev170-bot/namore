import ThemeLayout from "@layouts/ThemeLayout";
import { notFound } from 'next/navigation';

import { getPage } from "@library/pages-apis";
import { getAllServices } from "@library/services-apis";
import { getFeaturedRoomTypes } from "@library/rooms-apis";
import { getPosts } from "@library/blog-apis";
import { getConfigStrings, getConfigSettings, getConfigHeader, getConfigFooter } from "@library/config-apis";

import PageBlocks from "@components/page/PageBlocks";

export async function generateMetadata() {
  const configSettings = await getConfigSettings();
  const pageData = await getSinglePageData(configSettings?.homePage || "home");
  
  return {
      title: pageData.title,
  }
}

async function Home1() {
  const configSettings = await getConfigSettings();
  const configStrings = await getConfigStrings();
  const pageData = await getSinglePageData(configSettings?.homePage || "home");
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

  const header = await getConfigHeader();
  const footer = await getConfigFooter();

  return (
    <ThemeLayout strings={configStrings} settings={configSettings} headerData={header} footerData={footer}>
      <PageBlocks blocks={pageData.blocks} collections={pageCollections} />
    </ThemeLayout>
  );
};
export default Home1;

async function getSinglePageData(homePage) {
  const pageData = await getPage(homePage)
  
  if ( !pageData ) {
    notFound()
  } else {
    return pageData
  }
}