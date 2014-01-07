var regularRate = 5;
var superRate = 10;
var anotherCustomer = "yes";
var customerCounter = 0;
var regularAccum = 0;
var superAccum = 0;
var numberWidgets, widgetType;
var totalWidgets, averageWidgets, moneyRegular;
var moneySuper, totalMoney;
//Loop
while (anotherCustomer == "yes")
{
   customerCounter = customerCounter + 1;
	 numberWidgets = prompt("How many widgets?", "");
	 numberWidgets = parseInt(numberWidgets);
	 widgetType = prompt("regular or super?", "regular");
	 if (widgetType == "regular")
	 {
	    regularAccum = regularAccum + numberWidgets;
	 }
	 else
	 {
	    superAccum = superAccum + numberWidgets;
	 }
	 //totalWidgets = superAccum + regularAccum;
	 //averageWidgets = totalWidgets / customerCounter;
	 //moneyRegular = regularAccum * regularRate;
	 //moneySuper = superAccum * superRate;
	 //totalMoney = moneyRegular + moneySuper;
	 
	 //alert("Total customer" + customerCounter);
	 //alert("total regular widgets: " + regularAccum);
	 //alert("total super widgets " + superAccum);
	 //alert("The average customer: " + averageWidgets);
	 //alert("the total amount of money is " + totalMoney);
	 anotherCustomer= prompt("another customer? yes/no", "yes");
	 

}
	 totalWidgets = superAccum + regularAccum;
	 averageWidgets = totalWidgets / customerCounter;
	 moneyRegular = regularAccum * regularRate;
	 moneySuper = superAccum * superRate;
	 totalMoney = moneyRegular + moneySuper;
	 	 
	 document.write("Total customer" + customerCounter);
	 document.write("<br>total regular widgets: " + regularAccum);
	 document.write("<br>total super widgets " + superAccum);
	 document.write("<br>The average customer: " + averageWidgets);
	 document.write("<br>the total amount of money is " + totalMoney);