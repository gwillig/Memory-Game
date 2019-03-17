/*
 * Create a list that holds all of your cards
 */

let openCards = [];
let cards_value = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube",
           "fa-leaf",  "fa-bicycle",  "fa-bomb"];
cards_value = cards_value.concat(cards_value)

let moves = 0;
// var for timer
let sec = 0;let min = 0;let hour = 0;
let sec_end;let min_end;let hour_end;
let stars = 3;

function rate_performance(){
    /**
     * @description update then number of stars based on the number of
     */
    let current_moves = document.querySelector(".moves").innerText

    if(current_moves==16){
        document.querySelector(`#star_1`).children[0].classList= ["fa fa-star-o"];
        stars = 2
    }
    else if (current_moves==20){
        document.querySelector(`#star_2`).children[0].classList= ["fa fa-star-o"];
        stars = 1
    }
    else if (current_moves==25){
        document.querySelector(`#star_3`).children[0].classList= ["fa fa-star-o"];
        stars = 0
    }
}
function timer_func(){
    /**
     * @description Create the timer function. At the end it calls the timer function
    */

    //1.Step: start timer
    sec++
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hour++;
        }
    }
    //2.Step: Format the variables
    if(sec<10){
        sec_end =`0${sec}`
    }
    else{
        sec_end = sec
    }
    if(min<10){
        min_end =`0${min}`
    }
        else{
        min_end = min
    }
    if(hour<10){
        hour_end =`0${hour}`
    }
        else{
        hour_end = hour
    }
    document.querySelector("#time").innerText=`${hour_end}:${min_end}:${sec_end}`
    timer()

}

function timer(){
  /**
  *@description a recursive function which call timer_func to updated the time every second
  */
    setTimeout(timer_func,1000)
}
//
function shuffle(array) {
  /**
  *@description Shuffle function from http://stackoverflow.com/a/2450976
  *@param {array}array - contains the array which will be shuffled
  *@return {array} array - is the shuffled array
  */
    let currentIndex = array.length, temporaryValue, randomIndex;

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
       rate_performance()
       if ( all_card_open == true)
       {
         $("#modul_won").modal()
         document.querySelector("#modul_moves").innerText  = moves;
         document.querySelector("#modul_time").innerText  = `${hour_end}:${min_end}:${sec_end}`;
         document.querySelector("#modul_stars").innerText  = stars;
       }
       else if (openCards.length==2){
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
  /**
  *@description Creates a new card
  * @param {string} value - Is the value of the created card
  * @return {object} new_card - return the new created card
  */
  //1.Step: Create a new deck
  //1.1.Step: Reset total amounts of moves,stars and time
  document.querySelector(".moves").innerText=0;
  for (let j=1;j<4;j++){
    document.querySelector(`#star_${j}`).children[0].classList= ["fa fa-star"];
  }
  sec = 0;min = 0,hour = 0;hour_end = "00";min_end = "00"; sec_end = "00"
  document.querySelector("#time").innerText=`${hour_end}:${min_end}:${sec_end}`
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
  //4.Step: Init. timer
  timer()


start_game();


