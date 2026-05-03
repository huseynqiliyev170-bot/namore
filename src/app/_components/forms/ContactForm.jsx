"use client";

import { Formik } from "formik";
import { useContext, useState } from "react";
import { BasicContext } from "@context/basicContext";

const ContactForm = ({ success_text, error_text, info_text }) => {
  const { strings } = useContext(BasicContext);
  const [successNotice, setSuccessNotice] = useState(false);
  const [errorNotice, setErrorNotice] = useState(false);

  return (
    <Formik
      initialValues={{ user_email: "", user_name: "", phone: "", message: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.user_name?.trim()) errors.user_name = "Required";

        if (!values.user_email?.trim()) {
          errors.user_email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)
        ) {
          errors.user_email = "Invalid email address";
        }

        if (!values.phone?.trim()) errors.phone = "Required";
        if (!values.message?.trim()) errors.message = "Required";

        return errors;
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setSuccessNotice(false);
        setErrorNotice(false);

        try {
          const res = await fetch("/api/feedback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: values.user_name.trim(),
              email: values.user_email.trim(),
              phone: values.phone.trim(),
              message: values.message.trim(),
            }),
          });

          const data = await res.json().catch(() => ({}));

          if (!res.ok || data?.error) {
            console.error("API FAILED:", data);
            setErrorNotice(true);
            return;
          }

          resetForm({
            values: {
              user_name: "",
              user_email: "",
              phone: "",
              message: "",
            },
          });

          setSuccessNotice(true);
        } catch (err) {
          console.error("REQUEST FAILED:", err);
          setErrorNotice(true);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          onSubmit={handleSubmit}
          id="contactForm"
          action="/contact"
          className="besmile-contact-form"
        >
          <div className="besmile-contact-form__grid">
            <div className="besmile-contact-form__field">
              <label>{strings.name}</label>
              <input
                type="text"
                placeholder={strings.enterYourName}
                name="user_name"
                id="user_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.user_name}
              />
              {touched.user_name && errors.user_name && (
                <div className="besmile-contact-form__error">
                  {errors.user_name}
                </div>
              )}
            </div>

            <div className="besmile-contact-form__field">
              <label>{strings.email}</label>
              <input
                type="email"
                id="user_email"
                placeholder={strings.enterOurEmail}
                name="user_email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.user_email}
              />
              {touched.user_email && errors.user_email && (
                <div className="besmile-contact-form__error">
                  {errors.user_email}
                </div>
              )}
            </div>

            <div className="besmile-contact-form__field besmile-contact-form__field--wide">
              <label>{strings.phoneNumber || "Phone Number"}</label>
              <input
                type="tel"
                id="phone"
                placeholder={strings.enterPhoneNumber || "Enter your phone number"}
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {touched.phone && errors.phone && (
                <div className="besmile-contact-form__error">
                  {errors.phone}
                </div>
              )}
            </div>

            <div className="besmile-contact-form__field besmile-contact-form__field--full">
              <label>{strings.message}</label>
              <textarea
                placeholder={strings.yourMessage}
                name="message"
                id="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {touched.message && errors.message && (
                <div className="besmile-contact-form__error">
                  {errors.message}
                </div>
              )}
            </div>
          </div>

          <div className="besmile-contact-form__bottom">
            {info_text && (
              <p>
                <span>*</span>
                {info_text}
              </p>
            )}

            <button
              type="submit"
              className="besmile-contact-form__submit"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? strings.loading : strings.send}</span>
              <i>→</i>
            </button>
          </div>

          {successNotice && (
            <div className="besmile-contact-form__status besmile-contact-form__status--success">
              {success_text}
            </div>
          )}

          {errorNotice && (
            <div className="besmile-contact-form__status besmile-contact-form__status--error">
              {error_text}
            </div>
          )}
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;