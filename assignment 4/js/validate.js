function validate(number,address)
{
   var regEx = /^\d{10}$/;
   if(!number.value.match(regEx))
     {
      alert("Please enter a valid phone number!");
     return false;
     }
    else if(address.value===null) {
       alert("Please enter address");
       return false;
       
       }
   else {
      alert("Form submitted");
      }

    if(address===null || address==" "){

     alert("Please enter address before placing order!");
      return false;
     }
}  
