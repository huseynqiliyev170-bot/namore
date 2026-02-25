import { notFound } from 'next/navigation';

import ThemeLayout from "@layouts/ThemeLayout";

import PageIntro from "@components/page/PageIntro";
import RoomsGrid from "@components/rooms/RoomsGrid";
import RoomsSearch from "@components/rooms/RoomsSearch";

import { getConfigSettings, getConfigStrings, getConfigHeader, getConfigFooter } from "@library/config-apis";
import { getPageRooms } from "@library/pages-apis";
import { getRoomTypes, getAllRoomCategories, getTotalRoomTypesCount } from "@library/rooms-apis";

export async function generateMetadata() {
  const pageData = await getPageRoomsData();
  
  return {
      title: pageData.title,
  }
}

async function Search( { searchParams } ) {
  const pageData = await getPageRoomsData();
  const configSettings = await getConfigSettings();
  const configStrings = await getConfigStrings();
  const { capacity, checkInDate, checkOutDate, category } = await searchParams;
  const limit = configSettings.roomsPerPage;
  const currentPage = parseInt((await searchParams).page) || 1;
  const roomTypes = await getRoomTypes(checkInDate, checkOutDate, capacity, category, limit, currentPage);
  const roomCategories = await getAllRoomCategories();
  const total = await getTotalRoomTypesCount(capacity, checkInDate, checkOutDate, category);
  const header = await getConfigHeader();
  const footer = await getConfigFooter();

  return (
    <ThemeLayout strings={configStrings} settings={configSettings} headerData={header} footerData={footer}>
      <PageIntro title={pageData.intro_title} short_title={pageData.title} />
      <RoomsSearch capacity={capacity} checkInDate={checkInDate} checkOutDate={checkOutDate} />
      <RoomsGrid rooms={roomTypes} categories={roomCategories} total={total} limit={limit} page={currentPage} text={pageData.bottom_text} />
    </ThemeLayout>
  );
};
export default Search;

async function getPageRoomsData() {
  const pageData = await getPageRooms()
  
  if ( !pageData ) {
    notFound()
  } else {
    return pageData
  }
}