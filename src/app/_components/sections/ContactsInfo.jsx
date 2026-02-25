import { getDirectusImageURL } from "@library/directus-image";

const ContactsInfoSection = ( { items } ) => {
  return (
    <>
        {/* contact info */}
        <div className="mil-contact mil-p-100-60">
            <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "85%", "top": "-20%", "right": "-30%", "transform": "rotate(-30deg) scaleX(-1)"}} alt="shape" />
            <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "110%", "bottom": "15%", "left": "-30%", "opacity": ".2"}} alt="shape" />

            <div className="container">
                <div className="row">
                    {items.map((item, key) => (
                    <div className="col-xl-4" key={`contacts-info-item-${key}`}>
                        <div className="mil-iconbox mil-mb-40-adapt mil-fade-up">
                            <div className="mil-bg-icon"></div>
                            <div className="mil-icon mil-icon-fix">
                                <img src={getDirectusImageURL(item.icon)} alt={item.icon.title} />
                            </div>
                            <h3 className="mil-mb-20">{item.value}</h3>
                            <p>{item.label}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        {/* contact info end */}
    </>
  );
};
export default ContactsInfoSection;