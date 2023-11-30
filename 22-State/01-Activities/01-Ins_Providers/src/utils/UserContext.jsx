import { createContext, useState } from 'react';

export const UserContext = createContext(); // creates a new context. Contexts in react allow data to be shared and accessed grobally.

// UserProvider is a component responsible for providing the context data to its descendants.
const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    name: 'John',
    role: 'Admin',
    id: 142323,
  });

  return (
    <UserContext.Provider value={{ currentUser: currentUser }} {...props} /> // anything iside the value is global.
  );
};

export default UserProvider;


/* NOTES: 

Imports:

-import { createContext, useState } from 'react';: Imports createContext and useState hooks from the React library. 
These will be used to create a context and manage state within a component.
Context Creation:

-This line creates a new context called UserContext using React's createContext() function. 
Contexts in React allow data to be shared and accessed across the component tree without manually passing props at every level.
UserProvider Component:

UserProvider is a component responsible for providing the context data to its descendants.
It uses the useState hook to define a currentUser state variable initialized with an object containing user information (name, role, id).
The UserProvider component returns a UserContext.Provider component. 
This component is part of the context API in React and allows its descendants to consume the context value.
The value prop of UserContext.Provider is set to an object with a property currentUser, which holds the state variable currentUser. 
This makes currentUser available as the context value.
The props passed to UserProvider are spread using {...props}. 
This enables additional props to be passed down to children of UserProvider.

-This line exports the UserProvider component as the default export of this module, 
allowing other components to import and use it.

-In summary, this code establishes a UserContext and a UserProvider component that wraps 
its children and provides the currentUser state as a context value. 
Components within the component tree can access this context's value and consume
the currentUser data without needing to pass it down manually through props at each level.




*/ 