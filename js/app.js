/*
 * Create a list that holds all of your cards
 */

var openCards = [];
var cards_value = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-anchor",
           "fa-leaf",  "fa-bicycle",  "fa-diamond",  "fa-bomb", "fa-leaf",
          "fa-bomb","fa-bolt", "fa-bicycle", "fa-paper-plane-o", "fa-cube"];

var moves = 0;
//
function shuffle(array) {
  /**
  *@description Shuffle function from http://stackoverflow.com/a/2450976
  *@param {array}array - contains the array which will be shuffled
  *@return {array} array - is the shuffled array
  */
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
function create_card(value){
  /**
  *@description Creates a new card
  * @param {string} value - Is the value of the created card
  * @return {object} new_card - return the new created card
  */
  // Creates a new card
     let new_card = document.createElement("li")
     new_card.classList.add("card")
     let card_value = document.createElement("i")
     card_value.classList.add("fa")
     card_value.classList.add(value)
     new_card.appendChild(card_value)
     new_card.addEventListener("click",function(event){

       //Check if all cards are open
       let all_cards = document.querySelectorAll(".card")
       let all_card_open = true;
       for(let i=0;i<all_cards.length;i++ ){

         if (!all_cards[i].classList.contains("show")){
           all_card_open = false;
           break;
         }
       }
       if ( all_card_open == true)
       {
         alert(`You win. Numberof moves: ${moves}`)
       }
       else{
         moves +=1
         document.querySelector(".moves").innerText=moves

       }

       if (openCards.length>=2){
         //Check if open cards are a match
         if (openCards[0].children[0].classList[1] == openCards[1].children[0].classList[1]){
           openCards = []
         }
         setTimeout(function(){
           openCards.forEach(function(cards_open){
             cards_open.classList.remove("open","show")
             openCards = []
           },1000)
         })

       }
       else {

         if ( !new_card.classList.contains("show") || !new_card.classList.contains("show")){
           new_card.classList.add("open","show")
           openCards.push(new_card)
         }

       }
     })
     return new_card
   }
function start_game(){
  //Ini the game
 //1.Step: Create a new deck
 //1.1.Step: Reset total amounts of Moves
 document.querySelector(".moves").innerText=moves
 //1.2.Step: Empty innerHTML of deck_div
 let deck_div = document.querySelector("#deck_div")
 deck_div.innerHTML = ""
 //1.3.Step: Create new deck
 let deck = document.createElement("ul")
 deck.classList.add("deck")
 //2.Step: Create a new card for each element of cards_value
 //2.1.Step: shuffle cards_value cards
 cards_value = shuffle(cards_value)
 for (let value in cards_value){
   let new_card = create_card(cards_value[value])
   deck.appendChild(new_card)
 }
 //3.Step: Append the deck to html document
 document.querySelector("#deck_div").appendChild(deck)
}
start_game();
