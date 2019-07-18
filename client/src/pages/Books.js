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
import Card from "../components/Card";

import API from "../utils/API";

class Books extends Component {
  state = {
    books: [],
    result: [],
    title: "",
    authors: "",
    synopsis: "",
    published: "",
    categories: "",
    rating: "",
    search: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteFaveBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  saveFaveBook = id => {
    API.saveBook({
      title: this.state.result.title,
      author: this.state.result.author,
      synopsis: this.state.result.synopsis
    })
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  searchGoogleBooks = query => {
    API.searchBooks(query)
      .then(res => {
        this.setState({ result: res.data.items });
        // console.log(res.data)
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
          <Col size="md-6">
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
                  <ListItem key={book.id}>
                    <BookDetail
                      title={book.volumeInfo.title}
                      src={book.volumeInfo.imageLinks.thumbnail}
                      authors={book.volumeInfo.authors}
                      genre={book.volumeInfo.categories}
                      published={book.volumeInfo.publishedDate}
                      description={book.volumeInfo.searchInfo.textSnippet}
                    />
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
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteFaveBook(book._id)} />
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
