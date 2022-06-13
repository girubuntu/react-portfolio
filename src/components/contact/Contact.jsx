import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9ty1jjf",
        "template_vel2w75",
        form.current,
        "wBk2FCNv0QqnswlQt"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className="contact_option-icons" />
            <h4>Email</h4>
            <h5>girubuntus@gmail.com</h5>
            <a href="mailto:girubuntus@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icons" />
            <h4>Whatsapp</h4>
            <h5>+250788747121 </h5>
            <a
              href="https://api.whatsapp.com/send?phone=+250788747121"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">
            Send Button
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
