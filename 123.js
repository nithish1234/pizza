function ValidateEmail(val)  
{  
var emailvalue=val;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(emailvalue.match(mailformat))  
{   
return true;  
}  
else  
{  
alert("You have entered an invalid email address!");    
return false;  
}  
}  
    