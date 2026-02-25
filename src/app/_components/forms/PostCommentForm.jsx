"use client";

import { Formik } from 'formik';
import { useContext, useState } from 'react';
import { BasicContext } from "@context/basicContext";

const PostCommentForm = ( { postId, replyId } ) => {
  const { strings } = useContext(BasicContext);
  const [successNotice, setSuccessNotice] = useState(false);
  const [errorNotice, setErrorNotice] = useState(false);

  return (
    <>
        {/* post comment form */}
        <Formik
        initialValues = {{ user_email: '', user_name: '', message: '' }}
        validate = { values => {
            const errors = {};
            if (!values.user_email) {
                errors.user_email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)
            ) {
                errors.user_email = 'Invalid email address';
            }
            return errors;
        }}
        onSubmit = {async ( values, { setSubmitting, resetForm } ) => {
            setSubmitting(true);

            /* Directus Flow Integration */
            await fetch('/api/post-comment', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    post_id: postId,
                    reply_id: replyId,
                    name: values.user_name,
                    email: values.user_email,
                    message: values.message,
                }),
            }).then((data) => {
                if (data.error) {
                    console.log('FAILED...', error);
                    console.error(data.error);
                    setErrorNotice(true);
                } else {
                    console.log('SUCCESS!');
                    setSubmitting(false);
                    resetForm();
                    setSuccessNotice(true);
                }
            });
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
            /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit} id="commentForm" action={"/"} className="mil-form">
            <div className="mil-field-frame mil-mb-20">
                <label>{strings.name}</label>
                <input 
                    type="text" 
                    placeholder={strings.enterYourName}
                    name="user_name" 
                    id="user_name"
                    required="required" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.user_name}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
            <div className="mil-field-frame mil-mb-20">
                <label>{strings.email}</label>
                <input 
                    type="email" 
                    id="user_email"
                    placeholder={strings.enterOurEmail}
                    name="user_email"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.user_email} 
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            </div>
            <div className="mil-field-frame mil-mb-20">
                <label>{strings.comment}</label>
                <textarea 
                    placeholder={strings.writeACommentHere}
                    name="message" 
                    id="message"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message} 
                    style={{"height": "200px"}}
                />
            </div>
            <button type="submit" className="mil-button mil-accent-1" disabled={isSubmitting}>
                {isSubmitting ? strings.loading : strings.send}
            </button>
            
            {successNotice &&
            <div className="form-status alert-success mil-p-30-0">{strings.postCommentSuccessNotice}</div>
            }
            {errorNotice &&
            <div className="form-status alert-error mil-p-30-0">{strings.postCommentErrorNotice}</div>
            }
        </form>
        )}
        </Formik>
        {/* comment form end */}
    </>
  );
};
export default PostCommentForm;