var phone = document.getElementById("phone").innerHTML.value;
var phoneno = /^\d{10}$/;
    if(!phone.match(phoneno))
    {
        alert('Phone number must have 10 digits only');
        
    }
	
