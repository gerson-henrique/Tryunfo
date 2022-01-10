import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';

class App extends React.Component {
  constructor() {
    super();
    this.itsAtributeValid = this.itsAtributeValid.bind(this);
    this.checkFullmentStates = this.checkFullmentStates.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.retirate = this.retirate.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardDeck: [],
    };
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState((ante) => ({
      cardDeck: [...ante.cardDeck, newCard],
      hasTrunfo: cardTrunfo,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,

    }));
  }

  onInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, this.checkFullmentStates);
  }

  retirate(target, trunf) {
    const { cardDeck } = this.state;
    this.setState((ante) => ({
      cardDeck: cardDeck.filter((card) => (
        card.cardName !== target)),
      hasTrunfo: trunf === true ? false : ante.hasTrunfo }));
  }

  itsAtributeValid() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const Att1 = parseInt(cardAttr1, 10);
    const Att2 = parseInt(cardAttr2, 10);
    const Att3 = parseInt(cardAttr3, 10);
    const highSingleAtt = 90;
    const highAllAtt = 210;
    if (
      (Att1 >= 0 && Att1 <= highSingleAtt)
      && (Att2 >= 0 && Att2 <= highSingleAtt)
      && (Att3 >= 0 && Att3 <= highSingleAtt)
      && ((Att1 + Att2 + Att3) <= highAllAtt)) {
      return true;
    }
    return false;
  }

  checkFullmentStates() {
    const { cardName, cardDescription, cardImage } = this.state;
    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && this.itsAtributeValid()
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardImage,
      cardRare,
      hasTrunfo,
      isSaveButtonDisabled,
      cardDeck } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          checkFullmentStates={ this.checkFullmentStates }
          itsAtributeValid={ this.itsAtributeValid }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <Deck
          cardDeck={ cardDeck }
          retirate={ this.retirate }
        />
      </div>
    );
  }
}

export default App;
