import React, { Component } from "react";
import API from "../utils/API";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Main from "../components/Main";
import Card from "../components/Card";

class Cards extends Component {
  //sets state to 0 or empty
  state = {
    cards: [],
    score: 0,
    highscore: 0,
    status: "Click an image to begin!"
  };
  // run load funct on componante load
  componentDidMount() {
    this.loadCards();
  }
  // load cards into state
  loadCards = () => {
    API.getCards()
      .then(res => this.setState({ cards: res.data }))
      .catch(err => console.log(err));
  };

  //shuffle the fruit cards in the browser when clicked
  imageClick = id => {
    let cardObj = this.state.cards;
    let Index = cardObj.indexOf(id);
    let scoreUp = this.state.score + 1;
    let highscore = this.state.highscore;

    if (id.clicked) {
      // if los set back to 0 and load fresh cards into state
      this.setState({
        score: 0,
        status: "You guessed incorrectly!"
      });
      this.loadCards();
    } else {
      // if win incriment both score and highscore
      cardObj[Index].clicked = true;
      this.setState({
        score: scoreUp,
        highscore:
          scoreUp > highscore ? (highscore = scoreUp) : (highscore = highscore),
        status: "You guessed correctly!"
      });

      // randomize cards on click
      for (let i = cardObj.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cardObj[i], cardObj[j]] = [cardObj[j], cardObj[i]];
      }
    }
  };

  render() {
    return (
      <div>
        <Nav
          status={this.state.status}
          score={this.state.score}
          topScore={this.state.highscore}
        />
        <Header />
        <Main>
          {/* Map over this.state.cards and render a card component for each card object */}
          {this.state.cards.map(card => (
            <Card
              onClick={() => this.imageClick(card)}
              key={card._id}
              name={card.name}
              image={card.image}
            />
          ))}
        </Main>
      </div>
    );
  }
}

export default Cards;
