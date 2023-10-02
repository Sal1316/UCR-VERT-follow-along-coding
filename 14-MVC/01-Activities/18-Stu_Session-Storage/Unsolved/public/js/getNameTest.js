const saveName = () => {
  sessionStorage.setItem("name", "sal");
  const data = sessionStorage.getItem("name");
  document.querySelector("h1").innerText = data;

  console.log("data: ", data);
};

saveName();
