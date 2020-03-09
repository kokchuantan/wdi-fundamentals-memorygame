console.log("Up and running!");
const cards = ['queen','queen','king','king'];
const cardsInPlay =[];
checkForMatch=function(){
    if(cardsInPlay.length===2){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
    }
}
flipCard =function(cardId){
    cardsInPlay.push(cardId); 
    console.log("User flipped " + cards[cardId]);
    checkForMatch();
        }
flipCard(0);
flipCard(2);

