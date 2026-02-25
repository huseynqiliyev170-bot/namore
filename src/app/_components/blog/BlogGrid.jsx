'use client';

import BlogItem from '@components/blog/BlogItem';
import Pagination from "@components/page/Pagination";

const BlogGrid = ({ posts, subtitle, title, text, limit, total, page }) => {
  return (
    <>
      {/* blog */}
      <div className="mil-rooms mil-p-100-100">
          <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "85%", "top": "-20%", "left": "-30%", "transform": "rotate(35deg)"}} alt="shape" />
          <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "85%", "bottom": "-12%", "right": "-30%", "transform": "rotate(-30deg) scaleX(-1)"}} alt="shape" />
          <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "110%", "bottom": "15%", "left": "-30%", "opacity": ".2"}} alt="shape" />
        
          <div className="container">
              {(subtitle || title) &&
              <div className="mil-text-center">
                  {subtitle &&
                  <div className="mil-suptitle mil-mb-20 mil-fade-up" dangerouslySetInnerHTML={{__html : subtitle}} />
                  }
                  {title &&
                  <h2 className="mil-mb-100 mil-fade-up" dangerouslySetInnerHTML={{__html : title}} />
                  }
              </div>
              }
              {posts &&
              <div className="row mil-mb-40">
                  {posts.map((item, key) => (
                  <div className="col-xl-4" key={`blog-item-${key}`}>

                    <BlogItem item={item} index={key} />

                  </div>
                  ))}
              </div>
              }
              <div className="row justify-content-between">
                  <div className="col-lg-7">
                      {text &&
                      <p className="mil-fade-up">{text}</p>
                      }
                  </div>
                  {total > 1 &&
                  <div className="col-lg-5">
                      <div className="mil-desctop-right mil-fade-up">
                        <Pagination total={total} limit={limit} currentPage={page} />
                      </div>
                  </div>
                  }
              </div>
          </div>
      </div>
      {/* blog end */}
    </>
  );
};
export default BlogGrid;
  