// Here we import the Header.css file to grant access to some additional classNames
// import "../styles/Header.css";

// TODO: Create a styles object called "styles"
const styles = {
  header: {
    background: "red",
    height: 200,
  },
  headerH1: {
    margin: 0,
    paddingTop: 75,
    textAlign: "center",
    color: "white",
    fontSize: "3rem",
  },
};

function Header() {
  return (
    <header className="header" style={styles.header}>
      <h1 style={styles.headerH1}>Welcome</h1>
    </header>
  );
}

export default Header;
