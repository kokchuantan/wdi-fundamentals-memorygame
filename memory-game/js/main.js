console.log("Up and running!");
const cards = [
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
const cardsInPlay =[];
checkForMatch=function(){
    if(cardsInPlay.length===2){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
      } else {
        alert("Sorry, try again.");
      }
    }
}
flipCard =function(cardId){
    cardsInPlay.push(cards[cardId].rank); 
    console.log("User flipped " + cards[cardId].rank);
    checkForMatch();
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
        }
flipCard(0);
flipCard(2);

