// Our Alert function accepts on argument of `props`.
// This will be an object containing all of the props or properties that were passed to this component from the parent.
// We can expect to see "message" and "type" properties inside our "props" object.
function Alert(props) { // or you could put an abject { type, message }
  //function Alert({ type, message }) { // or you could put an abject { type, message } just like destructuring props
  console.log(props);

  return (
    <div className={`alert alert-${props.type || "success"}`} role="alert">
    {/* <div className={`alert alert-${type || "success"}`} role="alert"> */}
      {props.message}
    </div>
  );
}

export default Alert;
