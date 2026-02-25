import Link from "next/link";
import Date from '@library/date';
import Image from 'next/image';
import { getDirectusImageURL } from "@library/directus-image";

const BlogItem = ({ item, index }) => {
  return (
    <>
      <Link href={`/blog/${item.slug}`} className="mil-card mil-mb-40-adapt mil-fade-up">
          <div className="mil-card-slider">
              <div className="swiper-slide">
                  <div className="mil-card-cover">
                      <Image src={getDirectusImageURL(item.image)} fill sizes="(max-width: 768px) 100vw, 33vw" alt={item.name} data-swiper-parallax="-100" data-swiper-parallax-scale="1.1" />
                  </div>
              </div>
          </div>
          <ul className="mil-parameters">
              <li>
                  <div className="mil-icon mil-image">
                      <img src={getDirectusImageURL(item.author.image)} alt={item.author.name} />
                  </div>
                  <div>{item.author.name}</div>
              </li>
              <li>
                  <div className="mil-icon">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.1881 2.62402H3.18597C2.35736 2.62402 1.68564 3.29574 1.68564 4.12435V13.1263C1.68564 13.9549 2.35736 14.6266 3.18597 14.6266H13.1881C14.0168 14.6266 14.6885 13.9549 14.6885 13.1263V4.12435C14.6885 3.29574 14.0168 2.62402 13.1881 2.62402Z" stroke="#272746" strokeWidth="1.00189" strokeLinejoin="round" />
                          <path d="M4.18536 1.62305V2.63226" stroke="#272746" strokeWidth="1.00189" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12.188 1.62305V2.63226" stroke="#272746" strokeWidth="1.00189" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M14.6885 5.12402H1.68564" stroke="#272746" strokeWidth="1.00189" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                  </div>
                  <div><Date dateString={item.published_date} /></div>
              </li>
          </ul>
          <div className="mil-descr">
              <h3 className="mil-mb-20">{item.name}</h3>
              <p className="mil-mb-20">{item.short}</p>
              <div className="mil-divider"></div>
              <div className="mil-card-bottom">
                  <div className="mil-link">
                      <span>Read more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                  </div>
              </div>
          </div>
      </Link>      
    </>
  );
};
export default BlogItem;
  