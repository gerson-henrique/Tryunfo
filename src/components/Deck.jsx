import React from 'react';
import PropTypes from 'prop-types';

class Deck extends React.Component {
  render() {
    const { cardDeck } = this.props;
    return (
      <div>
        <ul>
          <div>
            {
              cardDeck.map((cards) => (
                <li
                  key={ cards.cardName }
                >
                  Nome:
                  { cards.cardName }
                </li>
              ))
            }
          </div>
        </ul>
      </div>
    );
  }
}

Deck.defaultProps = {
  cardDeck: [],
};

Deck.propTypes = {
  cardDeck: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string,
      cardDescription: PropTypes.string,
      cardAttr1: PropTypes.number,
      cardAttr2: PropTypes.number,
      cardAttr3: PropTypes.number,
      cardImage: PropTypes.string,
      cardRare: PropTypes.string,
      cardTrunfo: PropTypes.bool,
    }),
  ),
};

export default Deck;
