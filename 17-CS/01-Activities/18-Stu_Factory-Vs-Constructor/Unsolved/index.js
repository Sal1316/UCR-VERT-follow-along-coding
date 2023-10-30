// TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }

// }

// const csForJS = new Lesson();
// csForJS.information();
// Old Code:

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
