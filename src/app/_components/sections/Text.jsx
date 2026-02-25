const TextSection = ( { text } ) => {
  return (
    <>
        {/* publication */}
        <div className="mil-pub-frame">
            <div className="container mil-p-100-100">
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <div className="mil-text mil-mb-40 mil-fade-up" dangerouslySetInnerHTML={{__html : text}} />
                    </div>
                </div>
            </div>
        </div>
        {/* publication end */}
    </>
);
};

export default TextSection;