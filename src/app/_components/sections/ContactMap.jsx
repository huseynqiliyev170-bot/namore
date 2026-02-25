const ContactMapSection = ( { map_embed_url } ) => {
  return (
    <>
        {/* map */}
        <div className="mil-p-0-100">
            <div className="container">
                <div className="mil-map-frame mil-fade-up">
                    <iframe 
                        src={map_embed_url} 
                        width="600" 
                        height="450" 
                        style={{"border":"0"}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
        {/* map end */}
    </>
  );
};
export default ContactMapSection;