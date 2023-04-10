import "./Form.css";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const form = useRef();

  const [isVerified, setIsVerified] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isVerified) {
      alert("Veuillez remplir le Captcha");
      return;
    }

    setEmailSent(true);

    emailjs
      .sendForm(
        "service_drkbrdb",
        "template_zm805w9",
        form.current,
        "QQnZcYOSLmXUYx7Jr"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message envoye");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function onChange(value) {
    setIsVerified(true);
  }


  return (
    <>
    {emailSent ? (
      <form ref={form} onSubmit={sendEmail}>
      <label>Votre Nom</label>
      <input type="text" name="user_name" required></input>
      <label>Email</label>
      <input type="email" name="user_email" required></input>
      <label>Sujet</label>
      <input type="text" name="user_subject" required></input>
      <label>Message</label>
      <textarea
        name="message"
        rows="6"
        placeholder="Type Your Message"
        required
      />
      <p className="validation">Votre message a bien ete envoyer</p>
      <ReCAPTCHA
        className="captcha"
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onChange}
        required
      />
      <input type="submit" value="Envoye" className="btn" />
    </form>
    ) : (

    <form ref={form} onSubmit={sendEmail}>
      <label>Votre Nom</label>
      <input type="text" name="user_name" required></input>
      <label>Email</label>
      <input type="email" name="user_email" required></input>
      <label>Sujet</label>
      <input type="text" name="user_subject" required></input>
      <label>Message</label>
      <textarea
        name="message"
        rows="6"
        placeholder="Type Your Message"
        required
      />
      <ReCAPTCHA
        className="captcha"
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onChange}
        required
      />
      <input type="submit" value="Envoye" className="btn" />
    </form>
  )}
  </>
  )
};

export default Form;
