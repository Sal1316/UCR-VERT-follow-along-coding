import { useState } from "react";
import "./style.css";

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState(""); // set to '', bc if its empty, it returns undefined.
  const [lastName, setLastName] = useState("");

  /* // removed this fx since we replaced with annynomous in the onChange form.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    return name === "firstName" ? setFirstName(value) : setLastName(value);
  };*/ 

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="container text-center">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={firstName}
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)} // changing the state direclty from onChange.
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
