// document.body.background.style = "Green"

// a = document.body.firstChild
// console.log(a.parentsNode);
// console.log(a.parentsElement);


// // console.log(document.body.firstChild);
// // console.log(document.body.firstChild);


let a = document.body
console.log("First Child of a is : ", a.firstChild);
console.log("First Child of a is : ", a.firstElementChild);
console.log(" sibling of child Node is : ", a.parentNode);
console.log("sibling of child Elemetns is : ", a.parentElement);

let b = document.body
console.log("Next Elements",b.nextElementSibling);
console.log("Previous Elements",b.previousElementSibling);
 
const changeBgRed =()=>{
    
}

document.body.firstElementChild.style.background="red"

 a.style.background="gray"