var regTicketRate = 10;
var earlyBirdRate = 5;
var weekDinnerRate = 8;
var weekendDinnerRate = 12;
var amountOfTickets,isItRegularTicket,isItWeekend;
var tRate,dRate,pricePerTicket,pricePerDinner;
var costOfDinnerAndMeal,totalAmountOwed;

//Input

amountOfTickets = prompt("The amount of tickets are: ","");
isItRegularTicket = prompt("Is this a Regular ticket? ","");
isItWeekend = prompt("Is it the weekend?","");

//Calculator

if (isItRegularTicket == "yes") 
{
   tRate = regTicketRate;
}
else
{
   tRate = earlyBirdRate;
}

if (isItWeekend == "yes") 
{
   dRate = weekendDinnerRate;
}
else
{
   dRate = weekDinnerRate;
	 
}

pricePerTicket = tRate;
pricePerDinner = dRate;
costOfDinnerAndMeal = pricePerTicket + pricePerDinner;
totalAmountOwed = amountOfTickets * costOfDinnerAndMeal;

//Output
document.write("The Amount of Tickets: " + amountOfTickets);
document.write("<br>The Price per Ticket is $" + pricePerTicket);
document.write("<br>The Price per Dinner is $" + pricePerDinner);
document.write("<br>The Price per Dinner and Meal is $" + costOfDinnerAndMeal);
document.write("<br>The Total Bill Comes To $" + totalAmountOwed);