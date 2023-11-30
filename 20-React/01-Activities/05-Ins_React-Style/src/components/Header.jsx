// Here we are importing a CSS file as a dependency. Meaning that this imported file applies css to our Header.jsx file.
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Header</h1>
    </header>
  );
}

export default Header;
