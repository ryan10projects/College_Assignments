function validate(number,address)
{
   var regEx = /^\d{10}$/;
   if(!number.value.match(regEx))
     {
      alert("Please enter a valid phone number!");
     return false;
     }
    else {
       alert("Form submitted successfully");
       
       }

    if(address===null || address==" "){

     alert("Please enter address before placing order!");
      return false;
     }
}  
