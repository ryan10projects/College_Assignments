function validate(number)
{
   var regEx = /^\d{10}$/;
   if(!number.value.match(regEx))
     {
      alert("Please enter a valid phone number.");
     return false;
     }
    var add = document.getElementbyid(address).value;

    if(add==null){

     alert("Please enter address before placing order");

     }
}  
