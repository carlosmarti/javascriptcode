var catBreedAccum = "";
var dogBreedAccum = "";
var dogCounter = 0;
var catCounter = 0;
var moreAnimals, animalType, breed;
var catCounter, catBreedAccum;
var dogCounter, dogBreedAccum;
//initialize the loop
moreAnimals = prompt("Do you have an animal?", "yes");
//start loop
while (moreAnimals == "yes")
{
animalType = prompt("dog or cat?", "cat");
breed = prompt("What breed?", "");
if (animalType == "dog")
{
dogCounter = dogCounter + 1;

if (dogCounter == 1)
{


dogBreedAccum = dogCounter + ". " + breed;
}
else
{
dogBreedAccum = dogBreedAccum + "<br>" + dogCounter + ". " + breed;
}
// alert("The dog breeds are " + dogBreedAccum);
}
else
{
catCounter = catCounter + 1;

if (catCounter == 1)
{


catBreedAccum = catCounter + ". " + breed;
}
else
{
catBreedAccum = catBreedAccum + "<br>" + catCounter + ". " + breed;
}
//alert("The cat breeds are " + catBreedAccum);
}
moreAnimals = prompt("Do you have another animal?", "yes");
}
document.write("The dog breeds are:<br>" + dogBreedAccum);
document.write("<p>The cat breeds are:<br> " + catBreedAccum);