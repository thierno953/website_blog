import React from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cvsbdtv",
        "template_8781v0b",
        formRef.current,
        "user_k8XMgvWkZThzIO7dKBfKI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    clear();
  };
  const clear = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return (

      <div className="container">
        <div className="content contact">
          <form className="input-control" ref={formRef} onSubmit={handleSubmit}>
            <h3>Contact</h3>
            <p>{done && "Thank you !"}</p>
            <div>
              <input
                type="text"
                required
                placeholder="NAME"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <textarea
                rows="6"
                required
                name="message"
                placeholder="MESSAGE"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
            <div>
              <button type="submit" className="s-btn">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
 
  );
};



export default Contact;
