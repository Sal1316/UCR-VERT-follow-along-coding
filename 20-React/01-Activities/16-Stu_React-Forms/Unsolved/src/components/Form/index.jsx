import { useState } from "react";
import "./style.css";

// Here we import a helper function by exact name since we removed the 'default' in the helper.js file.
import { checkPassword, validateEmail } from "../../utils/helpers";

function Form() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Getting the value and name of the input which triggered the change
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name; // type = 'email' 'username', and 'password'
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else if (inputType === "password") {
      setPassword(inputValue);
    }
  };

  const submitForms = (e) => {
    e.preventDefault(); // Preventing the default behavior of the form submit (which is to refresh the page)

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }

    // If successful, we want to clear out the input after registration.
    setUserName("");
    setEmail("");
    setPassword("");

    alert(`Hello ${userName}`);
  };

  return (
    <div className="container text-center">
      <h1>Hello {userName}</h1>
      <form className="form" onSubmit={submitForms}>
        <input
          value={email} // state has to be set to the value for state to work.
          name="email"
          onChange={handleInputChange} // executes "Every time" there is a letter change. 
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          value={password} 
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="password"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
