import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
 const validationSchema = Yup.object().shape({
    user_name: Yup.string().required("Full name is required"),
    user_email: Yup.string().email("Invalid email address").required("Email address is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("SUCCESS!");
          },
          (error) => {
            console.log(error.text);
            alert("FAILED...", error);
          }
        );
      resetForm();
    },
  });

  return (
    <section id="contact">
      <div className=" container w-full mx-auto py-16 lg:py-20">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-2xl shadow-grey-50">
            <h3 className=" text-[#141414] text-[24px] md:text-[40px] font-bold capitalize circular-std">
              Get in touch today
            </h3>
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
              <a
                href="#"
                className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md hover:text-white  hover:bg-[#835a31]"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mt-2">Ibadan, Nigeria</span>
              </a>

              <a
                href="#"
                className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md hover:text-white hover:bg-[#835a31]"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>

                <span className="mt-2">(+234) 8160541072 </span>
              </a>

              <a
                href="#"
                className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md hover:text-white hover:bg-[#835a31]"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>

                <span className="mt-2">akanscoded@gmail.com.</span>
              </a>
            </div>
            <form className="mt-6" onSubmit={formik.handleSubmit}>
              <div className="flex-1">
                <label className="label">Full name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your full name"
                  className="inpu_txt"
                  {...formik.getFieldProps("user_name")}
                />
                {formik.touched.user_name && formik.errors.user_name ? (
                  <div className="error-message text-red-500">{formik.errors.user_name}</div>
                ) : null}
              </div>

              <div className="flex-1 mt-6">
                <label className="label ">Email address</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email address"
                  className="inpu_txt"
                  {...formik.getFieldProps("user_email")}
                />
                {formik.touched.user_email && formik.errors.user_email ? (
                  <div className="error-message text-red-500">{formik.errors.user_email}</div>
                ) : null}
              </div>
              <div className="flex-1 mt-6">
                <label className="label ">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter your subject"
                  className="inpu_txt"
                  {...formik.getFieldProps("subject")}
                />
                {formik.touched.subject && formik.errors.subject ? (
                  <div className="error-message text-red-500">{formik.errors.subject}</div>
                ) : null}
              </div>

              <div className="w-full mt-6">
                <label className="label">Message</label>
                <textarea
                  name="message"
                  className="input_textarea"
                  placeholder="Enter your Message"
                  {...formik.getFieldProps("message")}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="error-message text-red-500">{formik.errors.message}</div>
                ) : null}
              </div>

              <button className="btn" type="submit">
                get in touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
