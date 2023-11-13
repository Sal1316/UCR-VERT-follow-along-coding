import Card from "./Card";

export default function Display() {
  // const feline = {
  //   name: "Fluffykins",
  //   description: "A cat that acts like a dog",
  //   id: 1,
  // };
  const dog = {
    name: "D.O.G",
    description: "A Dog that acts like a bird",
    id: 2,
  };

  return (
    <>
      {/* <Card
        name={feline.name}
        description={feline.description}
        id={feline.id}
      ></Card> */}
      <Card dog={dog}></Card>
    </>

    // <div>
    //     {/* TODO: Write logic that will render a Card component for the kitten */}
    //     {/* TODO: Pass `name`, `description`, and `id` to the Card component as props */}
    // </div>
  );
}
