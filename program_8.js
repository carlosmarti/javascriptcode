var childName = [];
var childNameCounter = 0;
var anotherName = "yes";
var newName;
//array
while(anotherName == "yes")
{

   newName = prompt("What is the first name", "tom");
   childName.push(newName);
   alert(childName.toString());
   anotherName = prompt("is there another name?", "yes");
}
childName.sort();
for(theName = 0; theName <= 2; theName = theName + 1)
{
  alert(childName[theName]);
}