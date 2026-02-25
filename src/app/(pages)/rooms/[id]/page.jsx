import { notFound } from 'next/navigation';

import ThemeLayout from "@layouts/ThemeLayout";
import PageIntro2 from "@components/page/PageIntro2";
import CallToActionSection from "@components/sections/CallToAction";
import DirectBookingForm from "@components/forms/DirectBookingForm";
import FeaturedRoomsSlider from "@components/sliders/FeaturedRooms";
import RoomDetailSlider from "@components/sliders/RoomDetailSlider";

import { getDirectusImageURL } from "@library/directus-image";

import { getConfigSettings, getConfigStrings, getConfigHeader, getConfigFooter } from "@library/config-apis";
import { getAllRoomSlugs, getRoomData, getFeaturedRoomTypes } from "@library/rooms-apis";
import { getBlock, getPageRooms } from "@library/pages-apis";

export async function generateMetadata({ params }) {
  const postData = await getSingleRoomData(params);
  const pageRoomsData = await getPageRooms();

  return {
      title: postData.name + " | " + pageRoomsData.title,
  }
}

async function RoomDetail ( { params } ) {
  const configSettings = await getConfigSettings();
  const configStrings = await getConfigStrings();
  const postData = await getSingleRoomData(params);
  const rooms = await getFeaturedRoomTypes(configSettings.roomsFeaturedCarouselLimit);
  const pageRoomsData = await getPageRooms();
  const block_cta = await getBlock(pageRoomsData.singleRoomCallToAction, 'block_call_to_action');
  const block_fr = await getBlock(pageRoomsData.singleRoomFeaturedRooms, 'block_featured_rooms');
  const header = await getConfigHeader();
  const footer = await getConfigFooter();

  return (
    <ThemeLayout strings={configStrings} settings={configSettings} headerData={header} footerData={footer}>
        <PageIntro2 pageTitle={postData.name} />

        {postData.gallery_type == 'wide' &&
        <RoomDetailSlider items={postData.gallery} layout={postData.gallery_type} />
        }

        {/* room info */}
        <div className="mil-info">
            <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "110%", "bottom": "15%", "left": "-30%", "opacity": ".2"}} alt="shape" />
            <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "85%", "bottom": "-20%", "right": "-30%", "transform": "rotate(-30deg) scaleX(-1)"}} alt="shape" />
            
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-8">
                        {postData.gallery_type == 'default' &&
                        <RoomDetailSlider items={postData.gallery} layout={postData.gallery_type} />
                        }
                        
                        {/* features */}
                        {/* {postData.features.length !== 0 &&
                        <div className="row mil-mb-60-adapt">
                            <div className="col-12">
                                <h3 className="mil-fade-up mil-mb-40">{configStrings.keyFeatures}</h3>
                            </div>
                            {postData.features.map((item, key) => (
                            <div className="col-xl-4" key={`room-features-item-${key}`}>
                                <div className="mil-iconbox mil-iconbox-sm mil-mb-40-adapt mil-fade-up">
                                    <div className="mil-bg-icon"></div>
                                    <div className="mil-icon mil-icon-fix">
                                        <img src={getDirectusImageURL(item.room_features_id.icon)} alt={item.room_features_id.name} />
                                    </div>
                                    <h5>{item.room_features_id.name}</h5>
                                </div>
                            </div>
                            ))}
                        </div>
                        } */}
                        {/* features */}

                        {/* description */}
                        {postData.content !== '' &&
                        <div className="row">
                            <div className="col-xl-11">
                                <div className="mil-dercription mil-mb-100">
                                    <h3 className="mil-fade-up mil-mb-40">{configStrings.description}</h3>
                                    <div className="mil-text mil-fade-up" dangerouslySetInnerHTML={{__html : postData.content}} />
                                </div>
                            </div>
                        </div>
                        }
                        {/* description end */}

                        {/* amenity */}
                        {postData.amenities.length !== 0 &&
                        <div className="row mil-mb-60-adapt">
                            <div className="col-12">
                                <h3 className="mil-fade-up mil-mb-40">{configStrings.amenities}</h3>
                            </div>
                            {postData.amenities.map((item, key) => (
                            <div className="col-xl-6" key={`room-amenities-item-${key}`}>
                                <div className="mil-iconbox mil-mb-40-adapt mil-fade-up">
                                    <div className="mil-bg-icon"></div>
                                    <div className="mil-icon mil-icon-fix">
                                      <img src={getDirectusImageURL(item.room_amenities_id.icon)} alt={item.room_amenities_id.name} />
                                    </div>
                                    <h3 className="mil-mb-20">{item.room_amenities_id.name}</h3>
                                    <p>{item.room_amenities_id.text}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                        }
                        {/* amenity end */}

                        {/* map */}
                        {postData.map_embed_url !== '' &&
                        <div>
                            <h3 className="mil-fade-up mil-mb-40">{configStrings.location}</h3>

                            <div className="mil-map-frame mil-fade-up mil-mb-100">
                                <iframe 
                                  src={postData.map_embed_url} 
                                  style={{"border": "0"}} 
                                  allowFullScreen="" 
                                  loading="lazy" 
                                  referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                        }
                        {/* map end */}

                    </div>

                    {/* sidebar */}
                    <div className="col-xl-4" data-sticky-container>

                        <div className="mil-sticky mil-stycky-right mil-p-0-100" data-margin-top="140">

                            <div className="mil-price-frame mil-mb-20">
                              <div className="mil-price">
                                  {configSettings.currencyPosition === 'left' &&
                                  <span className="mil-symbol">{configSettings.currencySymbol}</span>
                                  }
                                  <span className="mil-number">{postData.price}</span>
                                  {configSettings.currencyPosition === 'right' &&
                                  <span className="mil-symbol">{configSettings.currencySymbol}</span>
                                  }
                                  {configSettings.currencyAfterText}
                              </div>
                            </div>

                            <ul className="mil-parameters mil-mb-20">
                                <li>
                                    <div className="mil-icon">
                                      <img src="/img/icons/adults.svg" alt="icon" />
                                    </div>
                                    <div>{configStrings.adults}: {postData.capacity}</div>
                                </li>
                                <li>
                                    <div className="mil-icon">
                                      <img src="/img/icons/area.svg" alt="icon" />
                                    </div>
                                    <div>{configStrings.size}: {postData.area}{" "}{configSettings.areaUnits}</div>
                                </li>
                            </ul>
                                
                            <div className="mil-book-window">
                                {postData.rooms.length ? (
                                <DirectBookingForm roomTypeId={postData.id} roomId={postData.rooms[0].id} bookedDatesByRooms={postData.rooms} />
                                ) : (
                                <p className="mil-text-center">{configStrings.unavailableForBooking}</p>
                                )}
                            </div>

                        </div>
                    </div>
                    {/* sidebar end */}
                </div>
            </div>
        </div>
        {/* room info end */}
        
        {block_cta &&
        <CallToActionSection {...block_cta} />
        }
        {block_fr &&
        <FeaturedRoomsSlider rooms={rooms} {...block_fr} />
        }
    </ThemeLayout>
  );
};
export default RoomDetail;

export async function generateStaticParams() {
  const rooms = await getAllRoomSlugs()

  return rooms.map((room) => ({
    id: room.slug
  }))
}

async function getSingleRoomData(params) {
  const postData = await getRoomData((await params).id)
  
  if ( !postData ) {
    notFound()
  } else {
    return postData
  }
}