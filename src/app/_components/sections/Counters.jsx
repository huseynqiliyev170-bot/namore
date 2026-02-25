const CountersSection = ( { items } ) => {
    return (
        <>
            {/* counters */}
            <div className="mil-content-pad mil-p-100-60">
                <div className="container">
                    <div className="row">
                        {items.map((item, key) => (
                        <div className="col-xl-3" key={`counters-item-${key}`}>
                            <div className="mil-counter mil-fade-up mil-mb-40">
                                <div className="mil-counter-number">
                                    <h2 data-number={item.value}>0</h2>
                                    {item.valueAfter !== '' &&
                                    <span>{item.valueAfter}</span>
                                    }
                                </div>
                                <p className="mil-link">{item.label}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* counters end */}
        </>
    );
};
export default CountersSection;