import "./index.css";
import { Loader } from "react-loaders";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const refForm = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//   };
const Contact = () => {
  const refForm = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("Z8nbji9MMJJUinG3s"); // Replace with your actual public key from EmailJS
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const result = await emailjs.sendForm(
        'service_v7pmrq3',    // Replace with your EmailJS service ID
        'template_2v0y1pn',   // Replace with your EmailJS template ID
        refForm.current,
        'Z8nbji9MMJJUinG3s'     // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      setMessage('Message sent successfully! Thank you for contacting me.');
      refForm.current.reset();

    } catch (error) {
      console.error('Failed to send email:', error);
      setMessage('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me!</h1>

          <p>
            I am interested in freelance and full-time role opportunities -
            especially ambitious or large projects. However, if you have other
            request or question, don't hesitate to contact me using below form
            either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
