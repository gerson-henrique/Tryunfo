import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const {
      cardDeck,
      retirate,
    } = this.props;
    return (
      <div>
        <ul>
          {
            cardDeck.map((cards) => (
              <li
                key={ cards.cardName }
              >
                <Card
                  cardName={ cards.cardName }
                  cardDescription={ cards.cardDescription }
                  cardAttr1={ cards.cardAttr1 }
                  cardAttr2={ cards.cardAttr2 }
                  cardAttr3={ cards.cardAttr3 }
                  cardImage={ cards.cardImage }
                  cardRare={ cards.cardRare }
                  cardTrunfo={ cards.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => {
                    retirate(cards.cardName, cards.cardTrunfo);
                  } }
                >
                  Excluir
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

Deck.defaultProps = {
  retirate: () => {},
  cardDeck: [{
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
  }],
};

Deck.propTypes = {
  retirate: PropTypes.func,
  cardDeck: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string,
      cardDescription: PropTypes.string,
      cardAttr1: PropTypes.string,
      cardAttr2: PropTypes.string,
      cardAttr3: PropTypes.string,
      cardImage: PropTypes.string,
      cardRare: PropTypes.string,
      cardTrunfo: PropTypes.bool,
    }),
  ),
};

export default Deck;
