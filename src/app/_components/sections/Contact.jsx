import ContactForm from "@components/forms/ContactForm";

const ContactSection = ( { success_text, error_text, info_text } ) => {
  return (
    <>
      {/* contact form */}
      <div className="mil-content-pad mil-p-100-100">
          <div className="container">
            <ContactForm success_text={success_text} error_text={error_text} info_text={info_text} />
          </div>
      </div>
      {/* contact form end */}
    </>
  );
};
export default ContactSection;