function List({ groceries }) {
  console.log("groceries:", groceries);
  return (
    <ul className="list-group">
      {/* ✅ TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      {groceries.map((grocery) => {
        return <li key={grocery.id}>{grocery.name}</li>;
      })}
    </ul>
  );
}

export default List;
