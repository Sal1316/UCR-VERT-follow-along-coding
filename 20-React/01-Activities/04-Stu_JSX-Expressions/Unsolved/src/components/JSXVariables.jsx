function JSXVariables() {
  const name = "Sal";
  const thoughts = "react is great.";

  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          {/* in the {} you cannot evaluate objects */}
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
