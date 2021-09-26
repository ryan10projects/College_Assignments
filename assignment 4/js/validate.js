function validate(number)
{
   var regEx = ^[0-9]{10}$;
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
