function validate(number)
{
   var regEx = /^\d{10}$/;
   if(!number.value.match(regEx))
     {
      alert("Please enter a valid phone number.");
     return false;
     }
    var add = document.getElementById(address).value;

    if(!add){

     alert("Please enter address before placing order");
      return false;
     }
}  
