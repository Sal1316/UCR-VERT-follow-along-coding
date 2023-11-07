// TODO: Add a comment explaining the role of `export` in this function `boxClick()`
// ans: it exports the function right away insteadn of using the export function at the bottom

export const boxClick = () => {
  const box = document.getElementById("box");
  if (box.style.backgroundColor === "blue") {
    box.style.backgroundColor = "yellow";
  } else {
    box.style.backgroundColor = "blue";
  }
};
