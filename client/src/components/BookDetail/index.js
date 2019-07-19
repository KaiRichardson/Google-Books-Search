import React from "react";
import { Col, Row } from "../Grid";
import "./style.css";

function BookDetail(props) {
  return (
    <div className="book_card">
      <Row>
        <Col size="md-3 sm-12">
          <img alt={props.title} src={props.src} />
        </Col>
        <Col size="md-9 sm-12">
          <h3>Title: {props.title}</h3>
          <h3>Authors(s): {props.authors}</h3>
          <h3>Genre: {props.genre}</h3>
          <h3>Published: {props.published}</h3>
          <h3>Description: {props.description}</h3>
        </Col>
      </Row>
    </div>
  );
}

export default BookDetail;
