// Refactored to factory function code:
const getInformation = (state) => ({
  information: () => console.log(state.title, state.description),
});

const lesson = () => {
  const state = {
    title: "Module 17 - Computer Science",
    description: "CS for JS",
  };

  return { ...getInformation(state) };
};

const csForJS = lesson();
csForJS.information();
