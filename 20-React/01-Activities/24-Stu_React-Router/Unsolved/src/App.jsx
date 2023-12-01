import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;


/* NOTES:
- What does the <Outlet /> do? 
  ans: In React Router, the <Outlet /> component is used as a placeholder where the content of nested routes will be rendered.
    + Nested Routes: When you have nested routes, meaning routes that are rendered within other routes, the parent route 
      components often contain an <Outlet /> component. This serves as a placeholder for rendering the nested content.
    + Rendering Content: When a route that contains an <Outlet /> is matched (for instance, in your 'App' component), 
      React Router looks for the child routes associated with that parent route. The content defined in these child routes 
      will be rendered within the <Outlet /> placeholder.
    + Essentially, <Outlet /> acts as a rendering point for the content specified in nested routes. 
      It helps in composing routes and their associated components in a hierarchical manner.
      Remember, to make <Outlet /> work, you need to have a parent route component that renders it, 
      and child routes associated with that parent route.

*/ 