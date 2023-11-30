// TODO: Add a comment explaining what is being passed to this "child" component as props
// ans: the current count, the incrementing/decrementing refrence of the fucntions.
function CardBody({ count, handleIncrement, handleDecrement }) {
  // destructure  the 'props'
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {count}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleIncrement}
      >
        Increment
      </button>{" "}
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default CardBody;
