var onlineDiscountRate = .05;
var largeOrderDiscountRate = .10;
var standeredOrderDiscount = .05;
var taxRate = .08;
var largeOrderCutoff = 999;
var onlineOrder;
var onlineDiscount = 0;
var orderAmount,onlineDiscountOrder,Over1000Discount,totalDiscount;
var subtotal,taxTotal,grandTotal,largeOrderDiscount;

//Input
onlineOrder = prompt("Is this an online order? ", "");
orderAmount = prompt("What is The order amount? ", "");

//Calculations
if (onlineOrder == "yes")
{
   onlineDiscount = onlineDiscountRate
	  if (orderAmount > largeOrderCutoff)
		{
		 largeOrderDiscount = largeOrderDiscountRate;
		}
else
  {
   largeOrderDiscount = 0;
  }
 
}
else if (orderAmount > largeOrderCutoff)
 {
  largeOrderDiscount = standeredOrderDiscount;
 }
else
 {
  largeOrderDiscount = 0;
 }

onlineDiscountOrder = orderAmount * onlineDiscount;
Over1000Discount =  orderAmount * largeOrderDiscount;
totalDiscount =  onlineDiscountOrder + Over1000Discount;
subtotal =  orderAmount - totalDiscount;
taxTotal = subtotal * taxRate;
grandTotal = subtotal + taxTotal;

//Output
document.write("The order amount is $" + orderAmount);
document.write("<br>The online discount is $" + onlineDiscountOrder);
document.write("<br>Over $1000 discount is $" + Over1000Discount);
document.write("<br>The total discount is $" + totalDiscount);
document.write("<br>The subtotal amount is $" + subtotal);
document.write("<br>The total tax amount is $" + taxTotal);
document.write("<br>The grand total is $" + grandTotal);