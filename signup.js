function ValidateEmail(val) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (val.match(mailformat)) {
        showError("mailErrorspan", "");

        return true;
    } else {
        showError("mailErrorspan", "invalid e-mail id (eg:someone@gmail.com)");
        return false;
    }
}


function random() {
   
    var foundError;
    var four = document.getElementById("zero").value;
if (four == null || four == "")

    {
        showError("nameErrorspan", "Please enter name");
        foundError = true;
    }
   
    else {
        showError("nameErrorspan", "");
    }
        var five = document.getElementById("one").value;
if (five == null || five == "") {
        showError("usernameErrorspan", "Please enter username");
        foundError = true;

    } else if (!isNaN(five)) {
        showError("usernameErrorspan", "please enter only characters");
        foundError = true;
    } else if (five.length < 5) {
        showError("usernameErrorspan", "username sholud be above 5 letters");
        foundError = true;
    } else {
        showError("usernameErrorspan", "");
    }

  var seven = document.getElementById("three").value;

    if (seven == null || seven == "") {
        showError("passwordErrorspan", "Please enter password");
        foundError = true;

    } 
else if(seven.length<5){
    showError("passwordErrorspan","password should be above 5 letters");
    foundError=true;
}
    else if(four==seven)
        {
            showError("passwordErrorspan","name and password can't be same ");
            foundError=true;
        }
        
    else {
        showError("passwordErrorspan", "");
    }
      var reenter = document.getElementById("re").value;
    if (reenter == null || reenter == "") {
        showError("re-enterErrorspan", "plese re-enter your password");
        foundError = true;
    } 
     else if (seven != reenter) {
        showError("re-enterErrorspan", "password dosent match");
         foundError = true;
    } else {
        showError("re-enterErrorspan", "");
    }
        var who = document.getElementById("two").value;
    if (who == null || who == "") {
        showError("mailErrorspan", "Please enter e-mail id");
        foundError = true;
    } else if (who) {
        if (!ValidateEmail(who)) {
            foundError=true;
           
        }
    } else {
        window.location = "";
    }
if(!foundError)
    {
         window.location = "juke.html?name=" + four;
    }
}



function showError(spanId, errorMessage) {
    var errorSpan = document.getElementById(spanId);
    if (errorMessage)

    {
        errorSpan.innerHTML = errorMessage;
    } else {
        errorSpan.innerHTML = '';
    }
}