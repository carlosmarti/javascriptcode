var hamburger = 4;
var hotdogs = 2;
var corndogs = 3;
var nachos = 5;
var errorflag = 0;
var anotherCustomer = "yes"
var foodType,numberGoods,goodsTotal;
var hamburgerAccum = 0;
var hamburgerCost = 0;
var nachosCost = 0;
var hotdogAccum= 0;
var hotdogCost = 0;
var corndogCost = 0;
var nachosAccum = 0;
var corndogAccum = 0;

//Loop
while ( anotherCustomer == "yes")
{
    //Input
		foodType = prompt("Is it hamburger,hotdog,corndog,nachos", "");
		numberGoods = prompt("How many grilled goods?", "");
		numberGoods = parseInt(numberGoods);
		
		//Decision
		if (foodType == "hamburger")
		{
      hamburgerAccum = hamburgerAccum + numberGoods;
			alert(hamburgerAccum);
      hamburgerCost = hamburgerAccum * hamburger;
		}
    else if (foodType == "hotdog")
	  {
      hotdogAccum = hotdogAccum + numberGoods;
      hotdogCost = hotdogAccum * hotdogs;
	  }
   else if (foodType == "corndog")
	  {
      corndogAccum = corndogAccum + numberGoods;
      corndogCost = corndogAccum * corndogs;
		}
   else
	  { 
      nachosAccum = nachosAccum + numberGoods;
      nachosCost = nachosAccum * nachos;
	  }
	
	//Input
	anotherCustomer = prompt("are there more goods?");
}
//end

//Calculation
	goodsTotal = hamburgerCost + hotdogCost + corndogCost + nachosCost;

//Output
document.write("Amount of hamburgers: " + hamburgerAccum);
document.write("<br>Total for hamburgers $" + hamburgerCost);
document.write("<br>Amount of hotdogs: " + hotdogAccum);
document.write("<br>Total for hotdogs $" + hotdogCost);
document.write("<br>Amount of corndogs: " + corndogAccum);
document.write("<br>Total for corndogs $" + corndogCost);
document.write("<br>Amount of nachos: " + nachosAccum);
document.write("<br>Total for nachos $" + nachosCost);
document.write("<br>Grand total comes to $" + goodsTotal);