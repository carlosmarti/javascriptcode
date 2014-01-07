var adultPrice = 8;
var childPrice = 4;
var seniorPrice = 6;
var militaryPrice = 7;
var anotherCustomer = "yes";
var adultAccum = 0;
var childAccum = 0;
var seniorAccum = 0;
var militaryAccum = 0;
var customerCount = 0;
var errorFlag,typeTickets,numberTikets,adultCash,childCash,seniorCash;
var totalCash,fairAverage,militaryCash;

//Loop
while (anotherCustomer == "yes")
{
   errorFlag = 0;
	 //Input
	 typeTickets = prompt("adult,child,senior or military", "");
	 numberTickets = prompt("How many tickets?", "");
	 numberTickets = parseInt(numberTickets);
	 //start switch
	 switch (typeTickets) 
	 {
	   case "adult":
		  adultAccum = adultAccum + numberTickets;
			alert(adultAccum);
	    break;
			
	 case "child":
		  childAccum = childAccum + numberTickets;
			alert(childAccum);
	    break;
			
	 case "senior":
		  seniorAccum = seniorAccum + numberTickets;
			alert(seniorAccum);
	    break;
			
	 case "military":
		  militaryAccum = militaryAccum + numberTickets;
			alert(militaryAccum);
	    break;
			
		default:
		  alert("you typed" + typeTickets + "you should have typed adult,child,senior or military");
			errorFlag = 1;
			break;
	 }
	 //end switch
	 
	 //Desicion
	 if (errorFlag == 1)
	 {
	    anotherCustomer = "yes";
	 }
	 else
	 {
	    customerCount = customerCount + 1;
	 }
		
	 //Input
	 anotherCustomer = prompt("Is there another customer?", "yes");
}

//calculation
adultCash = adultAccum * adultPrice;
seniorCash = seniorAccum * seniorPrice;
childCash = childAccum * childPrice;
militaryCash = militaryAccum * militaryPrice;
totalCash = adultCash + childCash + seniorCash + militaryCash;
fairAverage = totalCash / customerCount;
//output
document.write("The amount colleted for adults: $" + adultCash);
document.write("<br>The amount colleted for child: $" + childCash);
document.write("<br>The amount colleted for senior: $" + seniorCash);
document.write("<br>The amount colleted for military: $" + militaryCash);
document.write("<br>The total average is: $" + fairAverage);
document.write("<br>The amount colleted for All: $" + totalCash);