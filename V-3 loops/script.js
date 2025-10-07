// let res = prompt("Enter Your Number")
// let a = res<=33?"Fail":"Pass";
// console.log(a);

/*
let a = prompt("Enter Your Value");
a=Number.parseInt(a)
for(a=a;a<=100;a++)
{
    console.log(a);
  
    
}




let obj = {
    Hindi: 90,
    shubh: 45,
    Koshal:50,
    nandita: 90
}

for (let a in obj){
    console.log("Marks of = " + a + "Number is : " +obj[a]);
    
}
    */


let sum =0;
let n = prompt("Enter Your Number ");
n = Number.parseInt(n)
for (let i=0; i<n; i++)
{
    sum += (i+1)
    console.log(sum);
    
    
}