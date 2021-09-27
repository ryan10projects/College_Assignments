function validate(number,address)
{
   var regEx = /^\d{10}$/;
   if(!number.value.match(regEx))
     {
      alert("Please enter a valid phone number!");
     return false;
     }
   

    if(address==null){

     alert("Please enter address before placing order!");
      return false;
     }
}  
