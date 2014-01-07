var anotherGuest = "yes";
var guestAccum = 0;
var groomAccum = 0;
var groomCounter = 0;
var brideAccum = 0;
var brideCounter = 0;
var toasterCount = 0;
var toasterNameAccum = 0;
var silverwareCount = 0;
var silverwareNameAccum = 0;
var steamwareCount = 0;
var steamwareNameAccum = 0;
var giftType,guestName,guestType;
var toaster,silverware,steamware;
//Loop
while (anotherGuest == "yes")
{
    guestAccum = guestAccum + 1;
		// Input
		guestType = prompt("groom or bride side", "");
		guestName = prompt("What is the name of the guest?", "");
		giftType = prompt("toaster,silverware,steamware", "");
		//switch start
				switch (giftType) 
				{ 
				  case "toaster":
					  toasterCount = toasterCount + 1;
						toasterNameAccum = toasterNameAccum + toasterCount + ". " + guestName + ", ";
						break;
				 
		      case "silverware":
				    silverwareCount = silverwareCount + 1;
						silverwareNameAccum = silverwareNameAccum + silverwareCount + ". " + guestName + ", ";
				    break;
						
		      case "steamware":
				    steamwareCount = steamwareCount + 1;
						steamwareNameAccum = steamwareNameAccum + steamwareCount + ". " + guestName + ", ";
				    break;
				}
		//Desicion
		 if (guestType == "bride")
		 {
				//Counter
				brideCounter = brideCounter + 1;
				//Desicion 
				if (brideCounter == 1)
				{
				   brideAccum = brideCounter + ". " + guestName;
				}
				else
				{
				   brideAccum = brideAccum + "," + brideCounter + guestName;
				}
		 }
		 else
		 {
				//Counter
				groomCounter = groomCounter + 1;
				//Desicion 
				if (groomCounter == 1)
				{
				   groomAccum = groomCounter + ". " + guestName;
				}
				else
				{
				   groomAccum = groomAccum + ", " + groomCounter + guestName;
				}
		 }
		
		//Input
		anotherGuest = prompt("Is there another guest?");
}
//Output
alert("Done Looping");
document.write("Your bride guest are:" + brideAccum + ", ");
document.write("<br>Your groom guest are:" + groomAccum + ", ");
document.write("<br>Multiple toaster from:" + toasterNameAccum);
document.write("<br>Multiple silverware from:" + silverwareNameAccum);
document.write("<br>Multiple steamware from:" + steamwareNameAccum);