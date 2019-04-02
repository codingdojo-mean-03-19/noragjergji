class Card {
    constructor(suit, stringValue, value) {
        this.suit = suit;
        this.stringValue = stringValue;
        this.value = value;
    }
}
class Deck {
    constructor() {
        this.cards = [];
        this.create();
        this.shuffle();
    }
    create() {
        var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
        const values = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                var card = new Card(suits[i], values[j], j + 1);
                this.cards.push(card);
            }
        }
    }

    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            let temp = this.cards[i];
            let randNumber = Math.floor(Math.random() * this.cards.length);
            this.cards[i] = this.cards[randNumber];
            this.cards[randNumber] = temp;
        }
    }
    reset() {
        this.cards = [];
        this.create();
    }
    deal() {
        return this.cards.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    draw(deck) {
        this.hand.push(deck.deal());
        return this
    }

    discard() {
        this.hand.pop();
        return this;
    }
}


var deck = new Deck();
deck.shuffle();
deck.reset()

var player1 = new Player('Nora')
console.log(player.draw(deck));
var player2 = new Player('Kiko');
console.log(player1.draw(deck));
