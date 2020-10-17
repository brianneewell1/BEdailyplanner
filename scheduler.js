//const moment = require("./moment");

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//save user input for 9am
taskNine.addEventListener("click", function (event) {
   event.preventDefault();
   var saveNine = document.getElementById('inputNine').value;
   localStorage.setItem('inputNine', saveNine);
})

//display user input for 9am
document.getElementById('inputNine').value = localStorage.getItem('inputNine');

//save user input for 10am
taskTen.addEventListener("click", function (event) {
   event.preventDefault();
   var saveTen = document.getElementById('inputTen').value;
   localStorage.setItem('inputTen', saveTen);
})

//display user input for 10am
document.getElementById('inputTen').value = localStorage.getItem('inputTen');

//save user input for 11am
taskEleven.addEventListener("click", function (event) {
   event.preventDefault();
   var saveEleven = document.getElementById('inputEleven').value;
   localStorage.setItem('inputEleven', saveEleven);
})

//display user input for 11am
document.getElementById('inputEleven').value = localStorage.getItem('inputEleven');

//save user input for 12pm
taskTwelve.addEventListener("click", function (event) {
   event.preventDefault();
   var saveTwelve = document.getElementById('inputTwelve').value;
   localStorage.setItem('inputTwelve', saveTwelve);
})

//display user input for 12pm
document.getElementById('inputTwelve').value = localStorage.getItem('inputTwelve');

//save user input for 1pm
taskOne.addEventListener("click", function (event) {
   event.preventDefault();
   var saveOne = document.getElementById('inputOne').value;
   localStorage.setItem('inputOne', saveOne);
})

//display user input for 1pm
document.getElementById('inputOne').value = localStorage.getItem('inputOne');

//save user input for 2pm
taskTwo.addEventListener("click", function (event) {
   event.preventDefault();
   var saveTwo = document.getElementById('inputTwo').value;
   localStorage.setItem('inputTwo', saveTwo);
})

//display user input for 2pm
document.getElementById('inputTwo').value = localStorage.getItem('inputTwo');

//save user input for 3pm
taskThree.addEventListener("click", function (event) {
   event.preventDefault();
   var saveThree = document.getElementById('inputThree').value;
   localStorage.setItem('inputThree', saveThree);
})

//display user input for 3pm
document.getElementById('inputThree').value = localStorage.getItem('inputThree');

//save user input for 4pm
taskFour.addEventListener("click", function (event) {
   event.preventDefault();
   var saveFour = document.getElementById('inputFour').value;
   localStorage.setItem('inputFour', saveFour);
})

//display user input for 4pm
document.getElementById('inputFour').value = localStorage.getItem('inputFour');

//save user input for 5pm
taskFive.addEventListener("click", function (event) {
   event.preventDefault();
   var saveFive = document.getElementById('inputFive').value;
   localStorage.setItem('inputFive', saveFive);
})

//display user input for 5pm
document.getElementById('inputFive').value = localStorage.getItem('inputFive');


//add an if statement comparing the current time to the time on each div
var time = new Date().getHours();

function nineColor() {
   if (time == 9) {
      $("#inputNine").addClass('present');
   } else if (time < 9) {
      $("#inputNine").addClass('future');
   } else {
      $("#inputNine").addClass('past');
   }
}
$(document).ready(function () {
   nineColor();
});

function tenColor() {
   if (time == 10) {
      $("#inputTen").addClass('present');
   } else if (time < 10) {
      $("#inputTen").addClass('future');
   } else {
      $("#inputTen").addClass('past');
   }
}
$(document).ready(function () {
   tenColor();
});

function elevenColor() {
   if (time == 11) {
      $("#inputEleven").addClass('present');
   } else if (time < 11) {
      $("#inputEleven").addClass('future');
   } else {
      $("#inputEleven").addClass('past');
   }
}
$(document).ready(function () {
   elevenColor();
});

function twelveColor() {
   if (time == 12) {
      $("#inputTwelve").addClass('present');
   } else if (time < 12) {
      $("#inputTwelve").addClass('future');
   } else {
      $("#inputTwelve").addClass('past');
   }
}
$(document).ready(function () {
   twelveColor();
});

function oneColor() {
   if (time == 13) {
      $("#inputOne").addClass('present');
   } else if (time < 13) {
      $("#inputOne").addClass('future');
   } else {
      $("#inputOne").addClass('past');
   }
}
$(document).ready(function () {
   oneColor();
});

function twoColor() {
   if (time == 14) {
      $("#inputTwo").addClass('present');
   } else if (time < 14) {
      $("#inputTwo").addClass('future');
   } else {
      $("#inputTwo").addClass('past');
   }
}
$(document).ready(function () {
   twoColor();
});

function threeColor() {
   if (time == 15) {
      $("#inputThree").addClass('present');
   } else if (time < 15) {
      $("#inputThree").addClass('future');
   } else {
      $("#inputThree").addClass('past');
   }
}
$(document).ready(function () {
   threeColor();
});

function fourColor() {
   if (time == 16) {
      $("#inputFour").addClass('present');
   } else if (time < 16) {
      $("#inputFour").addClass('future');
   } else {
      $("#inputFour").addClass('past');
   }
}
$(document).ready(function () {
   fourColor();
});

function fiveColor() {
   if (time == 17) {
      $("#inputFive").addClass('present');
   } else if (time < 17) {
      $("#inputFive").addClass('future');
   } else {
      $("#inputFive").addClass('past');
   }
}
$(document).ready(function () {
   fiveColor();
});

$("#clear-button").on("click", function(){
   $('#inputFive').val('');
   $('#inputFour').val('');
   $('#inputThree').val('');
   $('#inputTwo').val('');
   $('#inputOne').val('');
   $('#inputTwelve').val('');
   $('#inputEleven').val('');
   $('#inputTen').val('');
   $('#inputNine').val('');
});