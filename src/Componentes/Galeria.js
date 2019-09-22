import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Filter from "./Filter";
import CardInfo from "./CardInfo";
import { CARDS } from "../non-components/cards";

class Galeria extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: CARDS,
      selectedCard: null,
      cardFilter: null
    };
  }

  cardSelect(cardId) {
    this.setState({ selectedCard: cardId });
  }

  cardFilterSelect(filterName) {
    this.setState({ cardFilter: filterName });
  }
  render() {
    return (
      <div class="big-banner">Nuestros Perros
        <div class="jumbotron"><h2>Nuestros Miembros</h2></div>
        <div>
          <Filter
            cards={this.state.cards}
            cardSelect={cardId => this.cardSelect(cardId)}
            filter={this.state.cardFilter}
            cardFilterSelect={filterName => this.cardFilterSelect(filterName)}
          />
          <div class="jumbotron  jumbotron-fluid">
            <h1>Informacion</h1>
          </div>
          <div>
            <CardInfo
              card={
                this.state.cards.filter(
                  card => card.id === this.state.selectedCard
                )[0]
              }
            /> </div>
        </div>

      </div>

    );
  }
}


export default Galeria;
