import { notFound } from 'next/navigation';

import ThemeLayout from "@layouts/ThemeLayout";

import { getPageServices } from "@library/pages-apis";
import { getAllServices } from "@library/services-apis";
import { getFeaturedRoomTypes } from "@library/rooms-apis";
import { getPosts } from "@library/blog-apis";
import { getConfigSettings, getConfigStrings, getConfigHeader, getConfigFooter } from "@library/config-apis";

import PageBlocks from "@components/page/PageBlocks";

export async function generateMetadata() {
  const pageData = await getPageServicesData();
  
  return {
      title: pageData.title,
  }
}

async function ServicesPage() {
  const pageData = await getPageServicesData();
  const configStrings = await getConfigStrings();
  const configSettings = await getConfigSettings();

  const pageCollections = [];

  if ( pageData.blocks.some(e => e.collection == 'block_services') ) {
    pageCollections['services'] = await getAllServices();
  }
  if ( pageData.blocks.some(e => e.collection == 'block_services') ) {
    pageCollections['featured_rooms'] = await getFeaturedRoomTypes(configSettings.roomsFeaturedCarouselLimit);
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
export default ServicesPage;

async function getPageServicesData() {
  const pageData = await getPageServices()
  
  if ( !pageData ) {
    notFound()
  } else {
    return pageData
  }
}