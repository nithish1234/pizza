function intrest()
{ 
     var txt1="Simple Intrest:";
    var txt2="Compound Intrest:";
    var simpleIntrest;
    var compoundIntrest;
    var principle=document.getElementById("principle").value;
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var output=document.getElementById("output");
    var outputtwo=document.getElementById("outputtwo");
    if(principle==""||rate==""||years=="")
    {
        alert("please enter valid number");
    }
    else if(years>12){
        output.innerHTML="years should bw eithin 20";
    }
    simpleIntrest=principle*(rate/100)*years;
    compoundIntrest=principle*(1+rate/100)^rate;
    output.innerHTML=txt1+" "+simpleIntrest;
    outputtwo.innerHTML=txt2 +" "+compoundIntrest;
}