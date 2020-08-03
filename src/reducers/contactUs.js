const contactUsReducer = (
    state = { fullName: "", email:"", subject="", message="" },
    action) => {
    let temporaryState;
  
    switch (action.type) {
      case "UPDATE_FULLNAME":
        temporaryState = { ...state };
        temporaryState.fullName = action.fullNameValue;
        return temporaryState;
  
  
      case "UPDATE_EMAIL":
        temporaryState = { ...state };
        temporaryState.email = action.emailValue;
        return temporaryState;
  
      case "UPDATE_SUBJECT":
        temporaryState = { ...state };
        temporaryState.subject = action.subjectValue;
        return temporaryState;
  
      case "UPDATE_MESSAGE":
        temporaryState = { ...state };
        temporaryState.message = action.messageValue;
        temporaryState.pastCal.push(
          `${temporaryState.num1} ${temporaryState.oper} ${temporaryState.num2} = ${action.value}`
        );
        return temporaryState;
    }
  };
  
  export default contactUsReducer;
  