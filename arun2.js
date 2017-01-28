function original()
{
    var show=document.getElementById("errormsg1").value;
    if(show==""||show==null)
        {
          showError("error1","can't be empty");
        }
    else if(show=="arun kumar"||show=="arun kumar.k"||show=="arun kumar k"||show=="ARUN KUMAR"||show=="ARUN KUMAR K"||show=="ARUN KUMAR.K")
        {
            showError("error1"," ");
            
          
        }
    else if(show!="arun kumar"||show!="arun kumar.k"||show!="arun kumar k"||show!="ARUN KUMAR"||show!="ARUN KUMAR K"||show!="ARUN KUMAR.K")
        {
            showError("error1","its not u");
             
        }
    var name=document.getElementById("errormsg2").value;
    if(name==""||name==null)
        {
          showError("error2","can't be empty");
        }
    else if(name=="monisha arun"||name=="monisha arun"||name=="monisha"||name=="Monisha"||name=="MONISHA ARUN")
        {
            showError("error2","");
            
          
        }
    else if(name!="monisha arun"||name!="monisha arun")
        {
            showError("error2","its not u");
             
        }
    
      
    
    
}
function showError(spanid,errormsg)
{
var error=document.getElementById(spanid);
if(errormsg)
    {
        error.innerHTML=errormsg;
    }
        else
            {
                error.innerHTML='';
            }
        }