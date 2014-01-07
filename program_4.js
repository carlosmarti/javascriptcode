var lowValue = 50000;
var highValue = 150000;
var charlestonLowPercent = .01;
var charlestonMidPercent = .0150;
var charlestonHighPercent = .02;
var dorchesterLowPercent = .0125;
var dorchesterMidPercent = .0150;
var dorchesterHighPercent = .0175;
var berkleyLowPercent = .02;
var berkleyMidPercent = .0225;
var berkleyHighPercent = .0275;
var errorflag = 0;
var county,taxRate,taxOwed,housePrice;

//Input 
county = prompt(" Which county is it in? charleston,dorchester,berkley", "");
housePrice = prompt("What is the price of the house?", "");
//parseInt
housePrice = parseInt(housePrice);

//switch
switch (county)
{
   case "charleston":
	  if (housePrice < lowValue)
		   {
        taxRate = charlestonLowPercent;
		   }
		else if (housePrice < highValue)
		   {
		    taxRate = charlestonMidPercent;
		   }
		else 
		   {
			  taxRate = charlestonHighPercent;
		   }
	 break;
	 
	 case "dorchester":
	  if (housePrice < lowValue)
		   {
        taxRate = dorchesterLowPercent;
		   }
		else if (housePrice < highValue)
		   {
		    taxRate = dorchesterMidPercent;
		   }
		else 
		   {
			  taxRate = dorchesterHighPercent;
		   }
	 break;
	 
	 case "berkley":
		  if (housePrice < lowValue)
		   {
        taxRate = berkleyLowPercent;
		   }
		else if (housePrice < highValue)
		   {
		    taxRate = berkleyMidPercent;
		   }
		else 
		   {
			  taxRate = berkleyHighPercent;
		   }
	 break;
	 default:
	 alert("You entered " + county + " You should have entered charleston,dorchester,berkley");
	 errorflag = 1;
	 break;
}
//Calculation
taxOwed = housePrice * taxRate;

//Output
document.write("The county is: " + county);
document.write("<br>The total tax owed is $" + taxOwed);