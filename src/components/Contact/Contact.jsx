import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Loader from "./Loader";
import "./Contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("myyarzww");
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const handleNameFocus = () => {
    setNameFocused(true);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleMessageFocus = () => {
    setMessageFocused(true);
  };

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="contain">
      <h2>CONTACT-ME</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <div className={`form-group ${nameFocused ? "focused" : ""}`}>
            <input
              id="name"
              type="name"
              name="name"
              onFocus={handleNameFocus}
              onBlur={() => setNameFocused(false)}
            />
            <label htmlFor="name" className={nameFocused ? "active" : ""}>
              Name
            </label>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className={`form-group ${emailFocused ? "focused" : ""}`}>
            <input
              id="email"
              type="email"
              name="email"
              onFocus={handleEmailFocus}
              onBlur={() => setEmailFocused(false)}
            />
            <label htmlFor="email" className={emailFocused ? "active" : ""}>
              Email Address
            </label>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className={`form-group ${messageFocused ? "focused" : ""}`}>
            <textarea
              id="message"
              name="message"
              onFocus={handleMessageFocus}
              onBlur={() => setMessageFocused(false)}
            />
            <label htmlFor="message" className={messageFocused ? "active" : ""}>
              Message
            </label>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <span>submit</span>
          </button>
        </form>
        <Loader />
      </div>
    </div>
  );
};

export default Contact;
