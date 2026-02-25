import Link from "next/link";

import ThemeLayout from "@layouts/ThemeLayout";
import { notFound } from 'next/navigation';

import PageIntro from "@components/page/PageIntro";
import ContactsInfoSection from "@components/sections/ContactsInfo";

import { getBlock, getPageBookingSuccess } from "@library/pages-apis";
import { getConfigStrings, getConfigSettings, getConfigHeader, getConfigFooter } from "@library/config-apis";

export async function generateMetadata() {
  const pageData = await getPageBookingSuccessData();
  
  return {
      title: pageData.title,
  }
}

async function BookingSuccess() {
  const pageData = await getPageBookingSuccessData();
  const configStrings = await getConfigStrings();
  const configSettings = await getConfigSettings();
  const header = await getConfigHeader();
  const footer = await getConfigFooter();
  const block_cntct = await getBlock(pageData.contacts_info, 'block_contacts_info');

  return (
    <ThemeLayout strings={configStrings} settings={configSettings} headerData={header} footerData={footer}>
      <PageIntro title={pageData.intro_title} short_title={pageData.short_title} />

      <div className="mil-p-0-0">
        <div className="container">
            <div className="row">
              
              <div className="col-lg-12">
                <div className="mil-iconbox mil-text-center">
                  <h3 className="mil-mb-40">{pageData.result_title}</h3>
                  <p className="mil-mb-40">{pageData.result_text}</p>
                  {pageData.button_label &&
                  <Link href={pageData.button_link} className="mil-button mil-accent-1">
                    {pageData.button_label}
                  </Link>
                  }
                </div>
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
export default BookingSuccess;

async function getPageBookingSuccessData() {
  const pageData = await getPageBookingSuccess()
  
  if ( !pageData ) {
    notFound()
  } else {
    return pageData
  }
}