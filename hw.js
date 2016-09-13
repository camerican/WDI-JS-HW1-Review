// 1) two variables given a number
// add the result and log to console

var number1 = 4;
var number2 = 13;

console.log( "Answer 1: ", number2 + number1 );

// 2) Create multidimensional array
// output two items to console

var team = ["Arsenal","Tottenham","Chelsea"];
var city = ["London","London","London"];

var premier_league = [team, city];
var premier_league = [
  ["Arsenal","Tottenham","Chelsea"],
  ["London","London","London"],
  ["Great","SH**","Bad"]
];

console.log( "Favorite Team:", premier_league[0][0] ); //Arsenal
premier_league[2][2]; //Bad

// 3) get a number via prompt, check if if it's greater than 100

// var user_number = prompt("Enter your number of days in NYC" );
// if( user_number < 100 ) {
//   alert("You've not even been here for 4 months, oh dear, be careful");
// } else {
//   alert("You're officially a New Yorker, wow you lasted " + user_number + " days already!");
// }

// Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.

// document.addEventListener("DOMContentLoaded", runWhenReady);

// function runWhenReady() {

//   sayMyName( prompt("Tell me your name...") );

//   function sayMyName( userName ) {
//     console.log( "Did you find the div?", 
//       document.getElementsByTagName("div"));
//     document.getElementsByTagName("div")[0].innerHTML = "<h2>Your name is " + userName + ", howdy!</h2>";
//   }
// }

//jQuery ...  if we click on any element with a class of "team"
// $(".team").on("click",function(){
      // do the code here...
// });

//jQuery docuent ready
// $(document).on("ready",function(){

// });

document.addEventListener("DOMContentLoaded", function(){
  sayMyName( prompt("Tell me your name...") );

  function sayMyName( userName ) {
    console.log( "Did you find the div?", 
      document.getElementsByTagName("div"));
    document.getElementsByTagName("div")[0].innerHTML = "<h2>Your name is " + userName + ", howdy!</h2>";
  }
});

// 7) Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.

//hr = horizontal rule....

function horizontalRule() {
  console.log( "-------------------------" );
}
// envoke (call) our function...
horizontalRule();


// 8) Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.

/* Prize will accept a door number and tell
 * the user what they've won behind that door
 *
 * @param door number of our door
 * @return string prize we've won
 */
var prizes = ["A new car","A free vacation","An old shoe","A tennis racquet"];
function prize( door ) {
 
  door = parseInt(door) - 1; // convert user's pick to prizes index
  if( door >= 1 && door <= prizes.length ) {
    return prizes[door];
  } else {
    return "You done messed up";
  }
}

// function prize( door ) {
//   var item;
//   if( door == 1 ) {
//     item = "A new car";
//   } else if( door == 2 ) {
//     item = "A free vacation";
//   } else if( door == 3 ) {
//     item = "An old shoe";
//   } else { // something went wrong
//     item = "Something went horribly wrong";
//   }
//   return item;
// }

console.log( "You've won: " + prize( prompt("Pick a door, 1-3:") ) );



