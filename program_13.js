var anotherCustomer = "yes";
var dogAccum = 0;
var dogCounter = 0;
var dogChargeAccum = 0;
var catAccum = 0;
var catCounter = 0;
var catChargeAccum = 0;
var animalType,petName,charge;
//loop

while (anotherCustomer == "yes")
{
    animalType = prompt("dog or cat?", "dog");
		petName = prompt("What is your" + animalType + "s name", "");
		charge = prompt("How much is the bill", "");
		charge = parseInt(charge);
		if (animalType == "dog")
		  {
			   dogCounter = dogCounter + 1;
				 if (dogCounter == 1)
				  {
					   dogAccum = dogCounter  + " . "  + petName + " $" + charge;
					}
				 else 
				  {
				     dogAccum = dogAccum + "<br>" + dogCounter  + " . "  + petName + " $" + charge;
					}
					dogChargeAccum = dogChargeAccum + charge;
					alert(dogAccum);
					alert("Total dog charge $" + dogChargeAccum);
			}
			else
			{
				 catCounter = catCounter + 1;
				 if (catCounter == 1)
				  {
					   catAccum = dogCounter  + " . "  + petName + " $" + charge;
					}
				 else 
				  {
				     catAccum = catAccum + "<br>" + catCounter  + " . "  + petName + " $" + charge;
					}
					catChargeAccum = catChargeAccum + charge;
					alert(catAccum);
					alert("Total cat charge $" + catChargeAccum);
			}
			anotherCustomer = prompt("do you have another customer?", "yes");
}
document.write("dogs: <br>");
document.write(dogAccum);
document.write("<p>cats: <br>");
document.write(catAccum);
document.write("<br>Total dogs:" + dogCounter);
document.write("<br>Total dog Charges:" + dogChargeAccum);
document.write("<br>Total cats:" + catCounter);
document.write("<br>Total cat Charges:" + catChargeAccum);