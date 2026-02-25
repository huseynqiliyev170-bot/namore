import { notFound } from 'next/navigation';
import Link from "next/link";

import ThemeLayout from "@layouts/ThemeLayout";

import { getDirectusImageURL } from "@library/directus-image";

import { getAllServicesSlugs, getAllServices, getServiceData } from "@library/services-apis";
import { getFeaturedRoomTypes } from "@library/rooms-apis";
import { getBlock, getPageServices } from "@library/pages-apis";
import { getConfigSettings, getConfigStrings, getConfigHeader, getConfigFooter } from "@library/config-apis";

import PageIntro2 from "@components/page/PageIntro2";
import CallToActionSection from "@components/sections/CallToAction";
import FaqSection from "@components/sections/Faq";
import FeaturedRoomsSlider from "@components/sliders/FeaturedRooms";

export async function generateMetadata({ params }) {
  const pageData = await getSingleServiceData(params);
  const pageServicesData = await getPageServices();
  
  return {
      title: pageData.name + " | " + pageServicesData.title,
  }
}

async function ServiceDetail ( { params } ) {
  const configSettings = await getConfigSettings();
  const configStrings = await getConfigStrings();
  const header = await getConfigHeader();
  const footer = await getConfigFooter();
  const pageData = await getSingleServiceData(params);
  const pageServicesData = await getPageServices();
  const services = await getAllServices();
  const rooms = await getFeaturedRoomTypes(configSettings.roomsFeaturedCarouselLimit);
  const block_faq = await getBlock(pageServicesData.singleServiceFaq, 'block_faq');
  const block_cta = await getBlock(pageServicesData.singleServiceCallToAction, 'block_call_to_action');
  const block_fr = await getBlock(pageServicesData.singleServiceFeaturedRooms, 'block_featured_rooms');

  return (
    <ThemeLayout strings={configStrings} settings={configSettings} headerData={header} footerData={footer}>
        <PageIntro2 pageTitle={pageData.name} />

        {/* service */}
        <div className="mil-info">
            <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "110%", "bottom": "15%", "left": "-30%", "opacity": ".2"}} alt="shape" />
            <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "85%", "bottom": "-20%", "right": "-30%", "transform": "rotate(-30deg) scaleX(-1)"}} alt="shape" />
            
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-8">

                        {/* cover */}
                        <div className="mil-img mil-img-hori mil-mb-100 mil-fade-up">
                            <img src={getDirectusImageURL(pageData.image)} alt={pageData.name} />
                        </div>
                        {/* cover end */}

                        {/* description */}
                        <div className="row">
                            <div className="col-xl-11">
                                <div className="mil-dercription mil-mb-100">

                                    <div className="mil-text mil-fade-up" dangerouslySetInnerHTML={{__html : pageData.content}} />

                                </div>
                            </div>
                        </div>
                        {/* description end */}

                        {/* features */}
                        <div className="row mil-mb-60-adapt">
                            <div className="col-12">
                                <h3 className="mil-fade-up mil-mb-40">{configStrings.keyFeatures}</h3>
                            </div>
                            {pageData.features.map((item, key) => (
                            <div className="col-xl-4" key={`page-features-item-${key}`}>
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
                        {/* end features */}
                        {block_faq &&
                        <FaqSection {...block_faq} />
                        }
                    </div>

                    {/* sidebar */}
                    <div className="col-xl-4" data-sticky-container>

                        <div className="mil-sticky mil-stycky-right mil-p-0-100" data-margin-top="140">

                            <h3 className="mil-mb-40">{configStrings.allServices}</h3>
                            
                            {services.slice(0, 3).map((item, key) => (
                            <Link href={`/services/${item.slug}`} className="mil-service-card-sm mil-mb-20 mil-fade-up" key={`services-item-${key}`}>
                                <div className="mil-img-frame">
                                    <img src={getDirectusImageURL(item.image)} alt={item.name} />
                                </div>
                                <div className="mil-description">
                                    <h4>{item.name}</h4>
                                </div>
                            </Link>
                            ))}

                            <Link href="/services" className="mil-button mil-accent-1 mil-reply">
                                <span>{configStrings.viewAll}</span>
                            </Link>

                        </div>
                    </div>
                    {/* sidebar end */}
                </div>
            </div>
        </div>
        {/* service end */}
        
        {block_cta &&
        <CallToActionSection {...block_cta} />
        }

        {block_fr &&
        <FeaturedRoomsSlider
          {...block_fr} 
          rooms={rooms}
        />
        }
    </ThemeLayout>
  );
};
export default ServiceDetail;

export async function generateStaticParams() {
  const services = await getAllServicesSlugs();

  return services.map((service) => ({
    id: service.slug
  }))
}

async function getSingleServiceData(params) {
    const pageData = await getServiceData((await params).id)
    
    if ( !pageData ) {
      notFound()
    } else {
      return pageData
    }
}