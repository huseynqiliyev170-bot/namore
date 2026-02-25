import RoomItem from "@components/rooms/RoomItem";

const RoomsSection = ( { subtitle, title, text, rooms = [], button_label, button_link } ) => {
    return (
        <>
            {/* rooms */}
            <div className="mil-rooms mil-p-0-100">
                <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "85%", "top": "-20%", "right": "-30%", "transform": "rotate(-30deg) scaleX(-1)"}} alt="shape" />
                <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "110%", "bottom": "15%", "left": "-30%", "opacity": ".2"}} alt="shape" />
                
                <div className="container">
                    <div className="mil-text-center">
                        {subtitle &&
                        <div className="mil-suptitle mil-mb-20 mil-fade-up" dangerouslySetInnerHTML={{__html : subtitle}} />
                        }
                        {title &&
                        <h2 className="mil-mb-100 mil-fade-up" dangerouslySetInnerHTML={{__html : title}} />
                        }
                    </div>
                    {rooms &&
                    <div className="row mil-mb-40">
                        {rooms.map((item, key) => (
                        <div className="col-md-6 col-xl-4" key={`rooms-item-${key}`}>

                            <RoomItem item={item} index={key} />

                        </div>
                        ))}
                    </div>
                    }
                    <div className="row justify-content-between">
                        {text &&
                        <div className="col-lg-7">
                            <p className="mil-fade-up" dangerouslySetInnerHTML={{__html : text}} />
                        </div>
                        }
                        {button_label &&
                        <div className="col-lg-5">
                            <div className="mil-desctop-right mil-fade-up">
                                <a href={button_link} className="mil-button">
                                    <span>{button_label}</span>
                                </a>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
            {/* rooms end */}
        </>
    );
};

export default RoomsSection;
