import {differenceInDays} from "date-fns";
import { notFound } from 'next/navigation';

import ThemeLayout from "@layouts/ThemeLayout";

import PageIntro from "@components/page/PageIntro";
import ContactsInfoSection from "@components/sections/ContactsInfo";
import RoomItemSlider from "@components/rooms/RoomItemSlider";
import BookingCheckoutForm from "@components/forms/BookingCheckoutForm";
//import BookingCheckoutFormCash from "@components/forms/BookingCheckoutFormCash";

import { getRoomData } from "@library/rooms-apis";
import { getBlock, getPageBookingConfirm } from "@library/pages-apis";
import { getConfigStrings, getConfigSettings, getConfigHeader, getConfigFooter } from "@library/config-apis";

export async function generateMetadata() {
  const pageData = await getPageBookingConfirmData();
  
  return {
      title: pageData.title,
  }
}

async function Search( { searchParams } ) {
  const { checkInDate, checkOutDate, roomTypeId, roomId } = await searchParams;
  const roomData = await getRoomData(roomTypeId);
  const pageData = await getPageBookingConfirmData();
  const configStrings = await getConfigStrings();
  const configSettings = await getConfigSettings();
  const header = await getConfigHeader();
  const footer = await getConfigFooter();
  const totalNights = differenceInDays(checkOutDate, checkInDate);
  const totalSum = Number(roomData.price) * totalNights;
  const block_cntct = await getBlock(pageData.contacts_info, 'block_contacts_info');
  
  return (
    <ThemeLayout strings={configStrings} settings={configSettings} headerData={header} footerData={footer}>
      <PageIntro title={pageData.intro_title} short_title={pageData.short_title} />

      <div className="mil-p-0-0">
        <div className="container">
            <div className="row">
              
              <div className="col-lg-8">
                <div className="mil-iconbox">
                  <h3 className="mil-mb-40">{pageData.form_title}</h3>
                  <BookingCheckoutForm 
                    roomID={roomId}
                    nights={totalNights}
                    price={totalSum}
                    checkInDate={checkInDate}
                    checkOutDate={checkOutDate}
                    roomType={roomData.name}
                    roomTypeId={roomTypeId}
                  />
                  {/*
                  <BookingCheckoutFormCash 
                    roomID={roomId}
                    nights={totalNights}
                    price={totalSum}
                    checkInDate={checkInDate}
                    checkOutDate={checkOutDate}
                    roomType={roomData.name}
                    roomTypeId={roomTypeId}
                  />
                  */}
                </div>
              </div>

              <div className="col-lg-4">

                  {roomData !== undefined &&
                  <div className="mil-card mil-mb-40-adapt">
                    {roomData.gallery !== undefined &&
                    <RoomItemSlider images={roomData.gallery} />
                    }
                    <ul className="mil-parameters justify-content-center">
                        <li>
                            <div className="mil-icon">
                                <img src="/img/icons/adults.svg" alt="icon" />
                            </div>
                            <div>{configStrings.adults}: {roomData.capacity}</div>
                        </li>
                        <li>
                            <div className="mil-icon">
                                <img src="/img/icons/area.svg" alt="icon" />
                            </div>
                            <div>{configStrings.size}: {roomData.area}{" "}{configSettings.areaUnits}</div>
                        </li>
                    </ul>
                    <div className="mil-descr row-cols-1 pt-4 pb-3">
                        <h3 className="mb-4">{roomData.name}</h3>
                        <div className="mil-divider"></div>
                        <div className="mil-price d-flex justify-content-between py-3">
                          <div>{configStrings.checkInDate}:</div> 
                          <div>{checkInDate}</div>
                        </div>
                        <div className="mil-divider"></div>
                        <div className="mil-price d-flex justify-content-between py-3">
                          <div>{configStrings.checkOutDate}:</div> 
                          <div>{checkOutDate}</div>
                        </div>
                        <div className="mil-divider"></div>
                        <div className="mil-price d-flex justify-content-between py-3">
                          <div>{configStrings.totalNights}:</div> 
                          <div>{totalNights}</div>
                        </div>
                        <div className="mil-divider"></div>
                        <div className="mil-price d-flex justify-content-between py-3">
                          <div>{configStrings.totalCost}:</div>
                          <div className="mil-price-total">
                            {configSettings.currencyPosition === 'left' &&
                            <span className="mil-symbol">{configSettings.currencySymbol}</span>
                            }
                            <span className="mil-number pe-0">{totalSum}</span>
                            {configSettings.currencyPosition === 'right' &&
                            <span className="mil-symbol">{configSettings.currencySymbol}</span>
                            }
                          </div>
                        </div>
                    </div>
                  </div>
                  }
              </div>

            </div>
        </div>
      </div>
      
      {block_cntct &&
      <ContactsInfoSection {...block_cntct} />
      }

    </ThemeLayout>
  );
};
export default Search;

async function getPageBookingConfirmData() {
  const pageData = await getPageBookingConfirm()
  
  if ( !pageData ) {
    notFound()
  } else {
    return pageData
  }
}