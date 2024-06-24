let result=document.getElementById("result");
let btn1=document.getElementById("btn1");
let input=document.getElementById("input");

btn1.addEventListener("click",function(){
    let dob = new Date(input.value);
    let month_diff = Date.now() - dob.getTime();  
    let age_dt = new Date(month_diff);   
    let year = age_dt.getUTCFullYear();  
    let age = Math.abs(year - 1970);  
 
    result.innerHTML ="Your age is "+age+" year old.";  
   
})