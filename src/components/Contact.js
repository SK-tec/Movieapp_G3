import { useState } from "react";
import Image from "./service.png";

const Contact = () => {
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState("");

  const handleChange = (event) => {
    console.log(event);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleChangeText = (event) => {
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
            <img src={Image}></img>
          </div>
          <div className="right">
            <h1 className="contact-form-intro">Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Enter your name:
                <input
                  type="text"
                  name="username"
                  value={inputs.username || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Enter your email:
                <input
                  type="email"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                />
              </label>
              Enter your message:
              <textarea
                name="message"
                value={textarea}
                onChange={handleChangeText}
              />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
