function gradecalculator()
{
    var txt1="The grade for the mark ";
    var txt2="is F(Fail)";
    var txt3="is D(average)";
    var txt4="is A(Good)";
    var txt5="is S(Excellent)";
   var output=document.getElementById("output");
 var showgrade=document.getElementById("getGrade").value;
    if(showgrade==null||showgrade=="")
        {
            alert("pls enter valid number");
        }
  
    else if(showgrade<45){
        
   
       output.innerHTML= txt1 +" "+showgrade+" " +txt2;
    }
    else if(showgrade>=45&& showgrade<=60)
        {
            output.innerHTML=txt1 +" "+showgrade+" " +txt3;
        }
    else if(showgrade>=61&&showgrade<=80)
        {
             output.innerHTML=txt1 +" "+showgrade+" " +txt4;
        }
     else if(showgrade>=81&&showgrade<=100)
        {
             output.innerHTML=txt1 +" "+showgrade+" " +txt5;
        }
    else if(showgrade>100)
        {
            output.innerHTML="please enter numbers within 1-100";
        }
    else{
       output.innerHTML="";
    }
}