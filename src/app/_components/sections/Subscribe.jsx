import SubscribeForm from "@components/forms/SubscribeForm";

const SubscribeSection = ( { subtitle, title } ) => {
  return (
    <>
        {/* call to action */}
        <div className="mil-content-pad mil-p-100-100 mil-fade-up">
            <div className="container">
                <div className="mil-text-center">
                    {subtitle &&
                    <div className="mil-suptitle mil-mb-20 mil-fade-up">{subtitle}</div>
                    }
                    {title &&
                    <h2 className="mil-h2-lg mil-mb-40 mil-fade-up">{title}</h2>
                    }
                    <SubscribeForm layout={"section"} />
                </div>
            </div>
        </div>
        {/* call to action end */}
    </>
  );
};

export default SubscribeSection;