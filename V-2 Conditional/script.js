alert("This alert for the security")
let a= prompt("What is your name ?")
a = Number.parseInt(a)
// let a = 234 , b=309;
// console.log(c=a+b);

// console.log(a);

if(a<0)
{
    alert("NoN");
}
else if(a<9)
{
    alert("Your are the child don't think for driver")
}
else if(a<18 && a>9)
{
    console.log("Your are the child now You driver after 18 above");
    
}
else
{
    
    alert("This is valid Number")
}