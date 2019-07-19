import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

import SearchForm from "../components/SearchForm";
import BookDetail from "../components/BookDetail";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";

import API from "../utils/API";

class Books extends Component {
  state = {
    books: [],
    result: [],
    search: "",
    error: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  deleteFaveBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  saveFaveBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  searchGoogleBooks = query => {
    API.searchBooks(query)
      .then(res => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        } else {
          // let results = res.data.items;

          let results = res.data.items.map(result => {
            result = {
              key: result.id,
              google_id: result.id,
              title: result.volumeInfo.title,
              thumbnail: result.volumeInfo.imageLinks.thumbnail,
              authors: result.volumeInfo.authors,
              genre: result.volumeInfo.categories,
              published: result.volumeInfo.publishedDate,
              link: result.volumeInfo.canonicalVolumeLink,
              description: result.volumeInfo.description
            };
            return result;
          });
          this.setState({ result: results, error: "" });
        }
        console.log(res.data.items);
        console.log(this.state.result);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGoogleBooks(this.state.search);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Search For A Book</h1>
            </Jumbotron>
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            {this.state.result.length ? (
              <List>
                {this.state.result.map(book => (
                  <ListItem key={book.google_id}>
                    <Link to={`/books/${book.google_id}`}>
                      <BookDetail
                        title={book.title}
                        src={book.thumbnail}
                        authors={
                          book.authors
                            ? book.authors.join(", ")
                            : "*not listed*"
                        }
                        genre={book.genre}
                        published={book.published}
                        description={
                          book.description
                            ? book.description.slice(0, 200).concat("...")
                            : "*not listed*"
                        }
                      />
                    </Link>
                    <SaveBtn onClick={() => this.saveFaveBook(book.google_id)} />
                    <ViewBtn href={book.link} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Fave Books</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={`/books/${book._id}`}>
                      <BookDetail
                        title={book.title}
                        src={book.thumbnail}
                        authors={
                          book.authors
                          // ? book.authors.join(", ") : "*not listed*"
                        }
                        genre={book.genre}
                        published={book.published}
                        description={
                          book.description
                          // ? book.description.slice(0, 200).concat("...")
                          // : "*not listed*"
                        }
                      />
                    </Link>
                    <DeleteBtn onClick={() => this.deleteFaveBook(book._id)} />
                    <ViewBtn href={book.link} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
