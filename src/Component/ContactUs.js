import React from "react";
import "../style/contactus.css";
import {updateFullName, updateEmail, updateSubject, updateMessage} from "../actions/contactUs";
// import { connect } from "react-redux";

class ContactUs extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = {
        fullName:"",
        email:"",
        subject:"",
        message:""
      };
      
    } 
    
  calculate(data) {
    console.log(data);
    }
  

  render() {
    return (
      <div className="contactUsContainer">
      <form>
        <h1>Contact Us</h1>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text" name="fullName"
            value={this.fullName}
            onChange={(event) => {
              this.props.dispatch(updateFullName(event.target.value));
            }}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text" name="email"
            value={this.email}
            onChange={(event) => {
              this.props.dispatch(updateEmail(event.target.value));
            }}
          />
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text" name="subject"
            value={this.subject}
            onChange={(event) => {
              this.props.dispatch(updateSubject(event.target.value));
            }}
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <input
            type="text" name="message"
            value={this.message}
            onChange={(event) => {
              this.props.dispatch(updateMessage(event.target.value));
            }}
          />
        </div>

        <div>
          <button onClick={() => this.calculate()}>Calculate</button>
        </div>

        {/* <p>{this.props.anything.result}</p> */}
        </form>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//     return {
//       anything: state,
//     };
//   }
  
  export default ContactUs;