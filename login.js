
function handlesubmit()
{
     var name=document.getElementById("content").value;
  if(name==null||name=="")
    {
            showError("usernameErrorSpan","Please enter Username");
            foundError=true;
        }

    else if(name.length<5)
        {
            showError("usernameErrorSpan","username should not be less than 5 letters");
            foundError=true;
            
        }
    else if(!isNaN(name)){

 showError("usernameErrorSpan","please enter only characters");
  foundError=true; 
        

}
   
else{
   showError("usernameErrorSpan","");
    foundError=true;
    
}
     if(!foundError)
    {
            
            window.location = "details.html?name=" + name;
        }
    
 

var college=document.getElementById("reserve").value;
if(college==null||college=="")
        {
            showError("passwordErrorSpan","please enter password");
            foundError=true;
        }
     
     else if(college.length<5)
        {
            showError("passwordErrorSpan","password must be above 5 letters");
            foundError=true;
            }
   else{
       showError("passwordErrorSpan"," ");
       foundError=true;
            window.location="details.html?name=" + name;
   }
       
}
 function showError(spanId, errorMessage)
{
    var errorSpan=document.getElementById(spanId);
    if(errorMessage)
    
    {
        errorSpan.innerHTML=errorMessage;
    }
    else{
        errorSpan.innerHTML='';
    }
}