function validate(number)
{
   var regEx = \d{10};
   if(number.value.match(regEx))
     {
      return true;
     }
   else
     {
     alert("Please enter a valid phone number.");
     return false;
     }
}  
