// The ContactUs.js component uses a local state and React to store user information. No Redux-Store is involved. 

import React from "react";
import "../../style/contactus.css";
import Footer from "../logic/Footer";
import MainHeader from "../logic/MainHeader";

class ContactUs extends React.Component {
  //The start of the local state within this ContactUs.js coponent
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    };
  }
  //The end of the local state within this ContactUs.js component

  //Event handler that process user input data and store it into the local state of ContactUs.js
  handleSubmit = (event) => {
    event.preventDefault();
    let subject = this.state.subject;
    var message = this.state.message;
    document.location =
      "mailto:bibhuti@ualberta.ca?subject=" + subject + "&body=" + message;
    this.resetContactForm();
  }; //End of the event handler. 


  //Method to reset the local to state with empty properties. 
  resetContactForm = () => {
    this.setState({ fullName: "", email: "", message: "", subject: "" });
  };

  //Method to update the local state once the user has input their data. 
  updateItem = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <>
        <MainHeader titleHeader="About Us" />
        <div className="contactUsContainer">
          <form onSubmit={this.handleSubmit} className="contactFormHolder">
            <div>
              <h2 id = "header2">Get In Touch!</h2>
              <div>
                <label htmlFor="fullName">Name</label>
              </div>
              <input
                type="text"
                name="fullName"
                required
                value={this.state.fullName}
                onChange={(event) => {
                  this.updateItem("fullName", event.target.value);
                }}
              />
            </div>

            <div>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <input
                type="text"
                name="email"
                required
                value={this.state.email}
                onChange={(event) => {
                  this.updateItem("email", event.target.value);
                }}
              />
            </div>

            <div>
              <div>
                <label htmlFor="subject">Subject</label>
              </div>
              <input
                type="text"
                name="subject"
                required
                value={this.state.subject}
                onChange={(event) => {
                  this.updateItem("subject", event.target.value);
                }}
              />
            </div>

            <div>
              <div>
                <label htmlFor="message">Message</label>
              </div>
              <textarea 
                type="text"
                name="message"
                required
                value={this.state.message}
                onChange={(event) => {
                  this.updateItem("message", event.target.value);
                }}
              ></textarea>
            </div>

            <div>
              <button>send</button>
            </div>
          </form>
          
        </div>
        <Footer />
      </>
    );
  }
}

export default ContactUs;
