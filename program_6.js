var EmployeesDiscount = .10;
var largeorderDiscount = .05;
var contractorDiscount = .20;
var salesTax = .08;
var largeordercutoff = 799;
var ageCutOff = 89;
var employee,age,originalPrice,discountRate,yes;
var tax,subtotal,finalPrice,discount,contractor;

//Input
contractor = prompt("Are you a registered contractor? (yes,no)", "");
age = prompt("What is your age?", "");
originalPrice = prompt("What is the original price", "");

//calculations
if (contractor == "yes") 

   {  
    discountRate = contractorDiscount;
   }
else
{
employee = prompt("Are you a employee? (yes,no)", "");
   if (employee == "yes")
   {
     discountRate = EmployeesDiscount;
	 }
else
	{
		discountRate = 0;
			if (originalPrice > largeordercutoff)
				{
					discountRate = largeorderDiscount;
				}
	}
  	
}	



if (age > ageCutOff) 
 {
     salesTax = 0;
 }
 
//Calculation
discount = discountRate * originalPrice;
alert(discountRate);
subtotal = originalPrice - discount;
tax = subtotal * salesTax;
finalPrice = subtotal + tax;

//Output
document.write("Customer age is:" + age);
document.write("<br>The original price is $" + originalPrice);
document.write("<br>The total discount is $" + discount);
document.write("<br>The subtotal is $" + subtotal);
document.write("<br>The total tax come is $" + tax);
document.write("<br>The final price is $" + finalPrice);