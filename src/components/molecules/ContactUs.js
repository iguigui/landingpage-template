import React from "react";
import { useField, Form, FormikProps, Formik } from "formik";
import * as yup from "yup";

// import { submitContactForm } from "../../actions";

import TextField from "../formik/TextField";
import TextArea from "../formik/TextArea";

const ContactUs = ({ className }) => {
  const initialValues = {
    email: "",
    phone: "",
    message: "",
  };
  const ContactUsSchema = yup.object().shape({
    email: yup
      .string()
      .email("invalid email")
      .required("please enter a proper format"),
    phone: yup
      .string()
      .required("please enter a phone number")
      .min(8, "phone number too short"),
  });

  return (
    <section className="contact-section ">
      <div className="ui container">
        <div className="flex-section">
          <h2 className="ui header">Contact Us</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={ContactUsSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                // dispatch(submitContactForm(values));
              }, 1000);
            }}
          >
            {(props: FormikProps<Values>) => (
              <Form className="ui large form error half-width">
                <div className="full-width">
                  <div className="two-inputs">
                    <TextField
                      name="email"
                      placeholder="Your Email"
                      type="text"
                    />
                    <TextField name="phone" placeholder="Phone" type="text" />
                  </div>
                  <TextArea
                    name="message"
                    placeholder="What can we do for you..."
                  />
                  <button type="submit" className="ui primary button">
                    Send Message
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
