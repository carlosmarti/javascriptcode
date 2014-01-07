var femaleLife = 10;
var femaleDisability = 15;
var maleLife = 20;
var maleDisability = 25;
var gender,numUnitsLife, numUnitsDisability;
var lifeRate,disabilityRate, monthlyFeeLife;
var monthlyFeeDisability, annualFeeLife;
var totalannualfee, annualFeeDisability;

//Input
gender = prompt("male or female?","female");
numUnitsLife = prompt("How many life 10,000's?", "");
numUnitsDisability = prompt("How many Disability 10,00's?","");

//calculations
if (gender == "female")
{
   lifeRate = femaleLife;
	 disabilityRate = femaleDisability;
}
else 
{
   lifeRate = maleLife;
	 disabilityRate = maleDisability;
}

monthlyFeeLife = lifeRate * numUnitsLife;
monthlyFeeDisability = disabilityRate * numUnitsDisability;
annualFeeLife = monthlyFeeLife * 12;
annualFeeDisability = monthlyFeeDisability * 12;
totalannualfee = annualFeeLife + annualFeeDisability;

//Output
document.write("Your gender is:  " + gender);
document.write("<br>Your Monthly Life bill:  " + monthlyFeeLife);
document.write("<br>Your Monthly Disability bill:  " + monthlyFeeDisability);
document.write("<br>Your Annual Life bill:  " + annualFeeLife);
document.write("<br>Your Annual Disability bill:  " + annualFeeDisability);
document.write("<br>Your Total Annual bill:  " + totalannualfee);