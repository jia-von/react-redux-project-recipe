import React from "react";
import "../style/contactus.css";
import Footer from "./Footer";
//import { updateFullName, updateEmail, updateSubject, updateMessage } from "../actions/contactUs";
// import { connect } from "react-redux";
import MainHeader from "./MainHeader";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let subject = this.state.subject;
    var message = this.state.message;
    document.location =
      "mailto:bibhuti@ualberta.ca?subject=" + subject + "&body=" + message;
    this.resetContactForm();
  };

  resetContactForm = () => {
    this.setState({ fullName: "", email: "", message: "", subject: "" });
  };

  updateItem = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <>
        <MainHeader titleHeader="About Us" />
        <div className="contactUsContainer">
          <form onSubmit={this.handleSubmit} className="contactFormHolder">
            <h2>Contact Us</h2>
            <div>
              <div>
                <label htmlFor="fullName">Full Name</label>
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
              <input
                type="textarea"
                name="message"
                required
                value={this.state.message}
                onChange={(event) => {
                  this.updateItem("message", event.target.value);
                }}
              />
            </div>

            <div>
              <button>Calculate</button>
            </div>
            {/* <p>{this.props.anything.result}</p> */}
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

// function mapStateToProps(state) {
//     return {
//       anything: state,
//     };
//   }

export default ContactUs;
