function validate(number,address)
{
   var regEx = /^\d{10}$/;
   var  nullvalue =/^$|\s+/;
   if(!number.value.match(regEx))
     {
      alert("Please enter a valid phone number!");
     return false;
     }
    else if(address.value.match(nullvalue)) {
       alert("Please enter address! ");
       return false;
       
       }
   else {
      alert("Form submitted"+address.value);
      }

    if(address===null || address==" "){

     alert("Please enter address before placing order!");
      return false;
     }
   


        

        

        



    
}  
