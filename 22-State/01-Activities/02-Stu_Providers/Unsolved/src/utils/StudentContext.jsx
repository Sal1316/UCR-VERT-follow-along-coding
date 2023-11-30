import { createContext, useContext } from "react";


const StudentContext = createContext(); // holds the state related to Students.

export const useStudentContext = () => useContext(StudentContext); // 

export const StudentProvider = ({ children }) => {
  const initialState = {
    students: [
      { id: 1, name: "Sal", major: "Engineering" },
      { id: 2, name: "Ceja", major: "Computer Sci" },
    ],
  };

  return (
    <StudentContext.Provider value={initialState}>
      {children}
    </StudentContext.Provider>
  );
};

/* NOTES:

This code seems to be setting up a context in React to manage student data within components. Here's a breakdown:

1. **Import Statements:** 
   - It imports `createContext` and `useContext` from the React library. These are used to create and consume React contexts.

2. **StudentContext Creation:**
   - `StudentContext` is created using `createContext()`. This context will hold the state related to students.

3. **Custom Hook: `useStudentContext`:**
   - what is useStudentContet? and Where is it used? The useStudentContext hook is intended to be used within functional 
      components to access the data provided by the StudentProvider component through the StudentContext. 
      For instance, in any functional component that needs access to the student data, you can import and 
      use the useStudentContext hook to retrieve that data. 
   - `useStudentContext` is a custom hook created to easily access the context's value within functional components. 
   It uses `useContext` with `StudentContext` to retrieve the context's value.

4. **StudentProvider Component:**
   - This component is created to provide the context's value to its children components.
   - It defines an `initialState` object containing an array of student objects with `id`, `name`, and `major` properties.
   - It uses `StudentContext.Provider` to wrap its children components and passes `initialState` as the value to the context.
   - This means that any component nested within `StudentProvider` can access the student data through the context.

In summary, this code sets up a `StudentContext` using React's context API and provides a way to access student-related data 
through the `useStudentContext` hook. The `StudentProvider` component wraps its children components and makes the student data available to them via the context.


*/ 