function validate(number,address)
{
   var regEx = /^\d{10}$/;
   var valueq =null;
   if(!number.value.match(regEx))
     {
      alert("Please enter a valid phone number!");
     return false;
     }
    else if(!address.value) {
       alert("Please enter address ");
       return false;
       
       }
   else {
      alert("Form submitted");
      }

    if(address===null || address==" "){

     alert("Please enter address before placing order!");
      return false;
     }
   


        

        

        

        var pincode=document.getElementById("number").value;

        document.writeln("Thank you for completing this form.<br><br>");

        document.writeln("Receipt cum acknowledgement.<br><br>");

        

        document.writeln("The Quantity you entered is " + Quantity + "<br>");

        document.writeln("The Tagline you entered is " + Tagline + "<br>");

        document.writeln("The Date you entered is " + Date + "<br>");

        document.writeln("The Address you entered is " + Address + "<br>");

        document.writeln("The pincode you entered is " + pincode + "<br>");   

      }

      </script>
}  
