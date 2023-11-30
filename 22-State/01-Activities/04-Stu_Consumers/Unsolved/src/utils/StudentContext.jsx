import { createContext, useContext, useState } from 'react';
import createId from './createId';

// Initialize new context for students
const StudentContext = createContext();

// We create a custom hook to provide immediate usage of the student context value (students) in other components when importing to others.
export const useStudentContext = () => useContext(StudentContext);

// The provider is responsible for holding our state, updating the state, and persisting values to the children
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Sayid',
      major: 'Computer Science',
    },
    {
      id: 2,
      name: 'Sun-Hwa',
      major: 'Data Science',
    },
  ]);


  const addStudent = (student) => {
    // Check if the user forgot to enter a name
    if (!student.name) {
      return;
    }
    // Generate a unique id for this student
    const id = createId(students);

    // We use the spread operator to fill in the details from the student object that was passed while adding the new `id`
    const newStudent = { ...student, id };

    // Update state with the students array with the newStudent
    setStudents([...students, newStudent]);
  };

  const removeStudent = (id) => {
    // Copy the content of the students array into our new list with the spread operator, then filter out the student that matches the `id` that was passed
    const newStudentsList = students.filter((student) => student.id !== id);

    // Update state with the new list after the student has been removed
    setStudents(newStudentsList);
  };

  const majors = [
    'Mathematics',
    'Computer Science',
    'Art',
    'English',
    'Political Science',
    'Journalism',
    'Engineering',
  ];

  // The value prop expects an initial state object
  return (
    <StudentContext.Provider
      value={{ students, addStudent, removeStudent, majors }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </StudentContext.Provider>
  );
};


/* NOTES: 
1. **Imports:**
   - It imports `createContext`, `useContext`, and `useState` from React. `createId` is imported from a custom module.
   - `createId` seems to be a function used to generate unique IDs for students.

2. **StudentContext Creation:**
   - `StudentContext` is created using `createContext()`. This context will hold the state related to students and functions to manipulate that state.

3. **Custom Hook: `useStudentContext`:**
   - `useStudentContext` is a custom hook created to access the context's value within functional components using `useContext`.

4. **StudentProvider Component:**
   - This component is a provider that manages student-related state and actions for its children.
   - It initializes a state variable `students` using `useState` with an array of student objects, each containing `id`, `name`, and `major` properties.
   - It defines functions: `addStudent` to add a new student to the list and `removeStudent` to remove a student by their ID from the list.
   - It defines a list of `majors` available for students.
   - The provider component wraps its children components using `StudentContext.Provider` and passes down the context value, which includes `students`, 
    `addStudent`, `removeStudent`, and `majors`.

5. **Usage of Provider:**
   - Components nested within `<StudentProvider>` can use the `useStudentContext` hook to access the context's values, such as `students`, 
   `addStudent`, `removeStudent`, and `majors`.

This setup allows components within the application to access and modify student-related data and functionalities provided by the 
`StudentProvider` component through the `StudentContext`.



*/ 