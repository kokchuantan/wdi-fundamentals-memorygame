console.log("Up and running!");
var cards = [
    {
    rank: 'queen',
    suit: 'hearts',
    cardImage: "images/queen-of-hearts.png"
    },
    {
    rank: 'queen',
    suit: 'diamond',
    cardImage: "images/queen-of-diamonds.png"
    },
    {
    rank: 'king',
    suit: 'hearts',
    cardImage: "images/king-of-hearts.png"
    },
    {
    rank: 'king',
    suit: 'diamond',
    cardImage: "images/king-of-diamonds.png"
    }
];
cardsInPlay =[];
checkForMatch=function(){
    cardId = this.getAttribute('data-id');
	cards.setAttribute("src", cards[cardId].cardImage);
    if(cardsInPlay.length===2){
        if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
      } 
        else {
        alert("Sorry, try again.");
      }
    }
};
flipCard =function(){
    cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank); 
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    checkForMatch(this);
    };
createBoard=function(){
    for (i = 0; i < cards.length; i++) {
        cardElement = document.createElement('img');
        cardElement.setAttribute("src", 'images/back.png');
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
};
createBoard();
