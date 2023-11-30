import { useState, useEffect } from "react";
import Container from "./UI/Container";
import Row from "./UI/Row";
import Col from "./UI/Col";
import Card from "./UI/Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

const OmdbContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState(""); // what does this do?

  // When the search form is submitted, use the API.search method to search for the movie(s)
  const searchMovie = (query) =>
    API.search(query)
      .then((res) => {
        setResult(res.data);
        setSearch("");
      })
      .catch((err) => console.log(err));

  //  Not inside the searchMovie fx.
  useEffect(() => {
    searchMovie("The Matrix"); // the default movie that shows when the page loads.
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchMovie(search); // gets the form value from SearchForm.jsx throuhg props
    setSearch("");
  };

  // Destructure the result object to make the code more readable, assign them to empty strings to start
  const {
    Title = "",
    Poster = "",
    Director = "",
    Genre = "",
    Released = "",
  } = result;

  /* Fall back to default header if `Title` is undefined
  Does `Title` exist? If so, render the `MovieDetail` card 
  If not, render a different header */

  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card heading={Title || "Search for a Movie to Begin"}>
            {Title ? (
              <MovieDetail
                title={Title}
                src={Poster}
                director={Director}
                genre={Genre}
                released={Released}
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OmdbContainer;
