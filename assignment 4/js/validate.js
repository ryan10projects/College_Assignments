var phone = document.getElementById("number").innerHTML.value;
var phoneno = /^\d{10}$/;
    if(!phone.match(phoneno))
    {
        alert('Phone number must have 10 digits only');
        
    }
	
