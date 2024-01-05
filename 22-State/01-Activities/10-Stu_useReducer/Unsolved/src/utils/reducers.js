// Import our actions from our actions file
import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
  ADD_MAJOR,
  REMOVE_MAJOR,
  SET_STUDENT_NAME,
  SET_STUDENT_MAJOR,
} from "./actions";
import createId from "./createId";

// Create a function that will handle combining two objects. Accepts state and an action as an argument.
export default function reducer(state, action) {
  // Depending on the action we create a new version of state after the desired action is preformed
  switch (action.type) {
    case ADD_STUDENT: {
      const newStudentId = createId(state.students);

      // Take a copy of the new student's data and add an id to it
      const newStudent = { ...action.payload, id: newStudentId };

      // Take a copy of state and assign the students array to our updated array with the new student
      return {
        ...state,
        students: [...state.students, newStudent],
        studentName: "", // clear out the student name and major after adding from input box.
        studentMajor: "",
      };
    }
    // Take a copy of state and return it with a modified version of the students array excluding the `student.id` in `action.payload`
    case REMOVE_STUDENT: {
      return {
        ...state,
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    }
    case UPDATE_STUDENT: {
      // Find the index of the student who has an id that matches the one in the payload
      const studentIndex = state.students.findIndex(
        (student) => student.id === action.payload.id
      );

      // Variable to hold our student object with the updated values from our action
      const updatedStudent = {
        ...state.students[studentIndex],
        ...action.payload,
      };

      // Make a copy of our current students array
      const newStudentsList = [...state.students];

      // Assign the updated student to their existing position in the newStudentsList
      newStudentsList[studentIndex] = updatedStudent;

      // Return a copy of state with our new student list
      return {
        ...state,
        students: newStudentsList,
      };
    }
    // Take a copy of existing state and modify the `majors` array such that the one in the payload gets added
    case ADD_MAJOR: {
      return {
        ...state,
        majors: [...state.majors, action.payload],
      };
    }
    // Take a copy of existing state and modify the `majors` array such that the one in the payload gets removed
    case REMOVE_MAJOR: {
      return {
        ...state,
        majors: [...state.majors].filter((major) => major !== action.payload),
      };
    }

    // Take a copy of existing state and modify the `studentName` property (initially an empty string). Used for input field in the UI.
    case SET_STUDENT_NAME: {
      return {
        ...state,
        studentName: action.payload,
      };
    }

    // Take a copy of existing state and modify the `studentMajor` property (initially an empty string). Used for dropdown field in the UI.
    case SET_STUDENT_MAJOR: {
      return {
        ...state,
        studentMajor: action.payload,
      };
    }

    // Default to returning the state as is in our switch statement
    default:
      return state;
  }
}