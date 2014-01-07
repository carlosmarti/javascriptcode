var waterMelonsRate = 5;
var cantaloupesRate = 8;
var honeydewRate = 10;
var LargeOrderCutoff = 10;
var largeOrderRate = .10;
var smallOrderRate = 0;
var amountWaterMelons,amountCantaloupes,amountHoneydew;

//Input 
amountWaterMelons = prompt("How many Watermelons?","");
amountCantaloupes = prompt("How many Cantaloupes?","");
amountHoneydew = prompt("How many Honeydew?","");

//convert to binary
amountWaterMelons = parseInt(amountWaterMelons);
amountCantaloupes = parseInt(amountCantaloupes);
amountHoneydew = parseInt(amountHoneydew);

//Calculations
DollarWaterMelons = amountWaterMelons * waterMelonsRate;
DollarCantaloupes = amountCantaloupes * cantaloupesRate;
DollarHoneydew = amountHoneydew * honeydewRate;
totalMelons = amountWaterMelons + amountCantaloupes + amountHoneydew;
subtotalAmount = DollarWaterMelons + DollarCantaloupes + DollarHoneydew;

if (totalMelons > LargeOrderCutoff)
{
   rate = largeOrderRate;
}
else 
{
  rate = smallOrderRate;
}

discount = subtotalAmount * rate;
orderTotal = subtotalAmount - discount;

//Output
document.write("Watermelons charge $" + DollarWaterMelons);
document.write("<br>Cantaloupes charge $" + DollarCantaloupes);
document.write("<br>Honeydew charge $" + DollarHoneydew);
document.write("<br>Amount of melons = " + totalMelons);
document.write("<br>Subtotal amount $" + subtotalAmount);
document.write("<br>Discount amount $" + discount);
document.write("<br>The order total comes to $" + orderTotal);