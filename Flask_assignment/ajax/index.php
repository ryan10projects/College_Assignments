<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="initial-scale=1.0, maximum-scale=2.0">
<title> Registration Form Using Ajax PHP MySQL </title>
		
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
		
</head>

	<body>
	
	
	<div class="wrapper">
	<div class="container">
		<div class="col-lg-12">
		  
			<center><h2>Registration Here</h2></center>
			
			<form id="registraion_form" class="form-horizontal">
					
				<div class="form-group">
			
				<label class="col-sm-3 control-label">Username</label>
				<div class="col-sm-6">
				<input type="text" id="txt_username" class="form-control" placeholder="enter username" />
				</div>
				</div>
				
				<div class="form-group">
				<label class="col-sm-3 control-label">Email</label>
				<div class="col-sm-6">
				<input type="text" id="txt_email" class="form-control" placeholder="enter email" />
				</div>
				</div>

				<div class="form-group">
				<label class="col-sm-3 control-label">College</label>
				<div class="col-sm-6">
				<input type="text" id="college" class="form-control" onkeyup="showCollege(this.value)" placeholder="enter college name" required>
				<p ><span id="txtHint"></span></p>
			</div>
				</div>

				<div class="form-group">
				<label class="col-sm-3 control-label">Password</label>
				<div class="col-sm-6">
				<input type="password" id="pwd" class="form-control" placeholder="enter password" />
				</div>
				</div>
				<div class="form-group">
				<label class="col-sm-3 control-label">Password</label>
				<div class="col-sm-6">
				<input type="password" id="txt_password" onkeyup="retypePwd(this.value)" class="form-control" placeholder="enter password" />
				</div>
				</div>
				
				<div class="form-group">
				<div class="col-sm-offset-3 col-sm-6 m-t-15">
				<button type="submit" id="btn_register" class="btn btn-success">Register</button>
				</div>
				</div>
				
				<div class="form-group">
					<div id="message" class="col-sm-offset-3 col-sm-6 m-t-15"></div>
				</div>
			
			</form>
			
		</div>
	</div>	
	</div>

	
	<script src="js/jquery-1.12.4-jquery.min.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	
	<script>
		
		$(document).on('click','#btn_register',function(e){
			
			e.preventDefault();
			
			var username = $('#txt_username').val();
			var email 	 = $('#txt_email').val();
			var password = $('#pwd').val();
			var college = $('#college').val();
			
			var atpos  = email.indexOf('@');
			var dotpos = email.lastIndexOf('.com');
			
			if(username == ''){ // check username not empty
				alert('please enter username !!'); 
			}
			else if(!/^[a-z A-Z]+$/.test(username)){ // check username allowed capital and small letters 
				alert('username only capital and small letters are allowed !!'); 
			}
			else if(email == ''){ //check email not empty
				alert('please enter email address !!'); 
			}
			else if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length){ //check valid email format
				alert('please enter valid email address !!'); 
			}
			else if(password == ''){ //check password not empty
				alert('please enter password !!'); 
			}
			
			else{			
				$.ajax({
					url: 'process.php',
					type: 'post',
					data: 
						{newusername:username, 
						 newemail:email, 
						 newpassword:password,
						 newcollege:college
						},
					success: function(response){
						$('#message').html(response);
					}
				});
				
				$('#registraion_form')[0].reset();
			}
		});

	</script>
	<script>
			function showCollege(str) { 
			if (str.length == 0) {
				document.getElementById("txtHint").innerHTML = "College Name can't be empty";
				return;
			} else {
				var xhr = new XMLHttpRequest(); 
				xhr.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) { 
						document.getElementById("txtHint").innerHTML = this.responseText;
					}
				};
				xhr.open("GET", "gethint.php?c=" + str + "&q=''", true); xhr.send();
			}
		}

	
		</script>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript">
    $(function () {
        $("#btn_register").click(function () {
            var password = $("#pwd").val();
            var confirmPassword = $("#txt_password").val();
            if (password != confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }
            return true;
        });
    });
</script>
	</body>
</html>

