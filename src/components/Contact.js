import { useState } from "react";
import Image from "./service.png";

const Contact = () => {
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleChangeText = (event) => {
    console.log(event);
    setTextarea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <div className="contact-form-container">
        <div className="contact-form-card">
          <div className="left">
            <h1 className="contact-form-h1">Contact Us</h1>
            <img src={Image} className="contact-form-img"></img>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit} className="form-body">
              <label className="form-label">
                Enter your name:
                <input
                  className="form-input"
                  type="text"
                  name="username"
                  value={inputs.username || ""}
                  onChange={handleChange}
                />
              </label>
              <label className="form-label">
                Enter your email:
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                />
              </label>
              <label className="form-label">Enter your message:</label>
              <textarea
                className="form-input"
                name="message"
                value={textarea}
                onChange={handleChangeText}
              />
              <input className="button-input" type="submit" />
            </form>
            <div className="social-icons">
              <i className="fi fi-brands-facebook" id="facebook-icon"></i>

              <i className="fi-brands-instagram"></i>

              <i className="fi-brands-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
