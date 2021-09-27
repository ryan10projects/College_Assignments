function validate(number,address)
{
   var regEx = /^\d{10}$/;
   var valueq =/^$|\s+/;
   if(!number.value.match(regEx))
     {
      alert("Please enter a valid phone number!");
     return false;
     }
    else if(address.value.match(valueq)) {
       alert("Please enter address ");
       return false;
       
       }
   else {
      alert("Form submitted"+address.valus);
      }

    if(address===null || address==" "){

     alert("Please enter address before placing order!");
      return false;
     }
   


        

        

        



    
}  
