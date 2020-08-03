const updateFullName = (fullNameValue) => {
    return {
      type: "UPDATE_FULLNAME",
      value: fullNameValue,
    };
  };

  const updateEmail = (emailValue) => {
    return {
      type: "UPDATE_EMAIL",
      value: emailValue,
    };
  };

  const updateSubject = (subjectValue) => {
    return {
      type: "UPDATE_SUBJECT",
      value: subjectValue,
    };
  };

  const updateMessage = (messageValue) => {
    return {
      type: "UPDATE_MESSAGE",
      value: messageValue,
    };
  };
  
  
  
  export { updateFullName, updateEmail, updateSubject, updateMessage };
  