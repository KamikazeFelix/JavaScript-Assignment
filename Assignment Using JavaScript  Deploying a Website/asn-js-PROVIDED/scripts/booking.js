/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costDay = 35;
var totalcost;
var calculatedcost = document.getElementById("calculated-cost");
var dayselected=document.getElementsByTagName("li");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!    

for (let i in dayselected) {
  if (dayselected.hasOwnProperty(i)) {
    dayselected[i].addEventListener("click", color_change);
  }
}
function color_change() {
  if (this.classList.contains("clicked") == false) {
    this.classList.add("clicked");
  }
  else {
    this.classList.remove("clicked");
  }
  caculate();
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
var clear_button = document.querySelector("#clear-button");
function clear_day() {
  for (let i in dayselected) {
    if (day_selected.hasOwnProperty(i)) {
      {
        dayselected[i].classList.remove("clicked");
        calculatedcost.innerHTML = 0;
      }
    }
  }
}

clear_button.addEventListener("click", clear_day);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
var halfday = document.getElementById("half");
halfday.addEventListener("click", change_rate_half);
function change_rate_half() {
  costDay = 20;
  halfday.classList.add("clicked");
  fullday.classList.remove("clicked");
  var dayCounter = document.querySelectorAll(".clicked").length - 1;
  totalcost = dayCounter * costDay;
  calculatedcost.innerHTML = totalcost;
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
var fullday = document.getElementById("full");
fullday.addEventListener("click", change_rate_full);
function change_rate_full() {
  costDay = 35;
  fullday.classList.add("clicked");
  halfday.classList.remove("clicked");
  var dayCounter = document.querySelectorAll(".clicked").length - 1;
  totalcost = dayCounter * costDay;
  calculatedcost.innerHTML = totalcost;
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function caculate() {
  var dayCounter = document.querySelectorAll(".clicked").length - 1;
  totalcost = dayCounter * costDay;
  calculatedcost.innerHTML = totalcost;
}
