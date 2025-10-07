


let a = prompt("Enter Your First Number");
let b = prompt("Enter Your Second Number");

a = Number.parseFloat(a)
b = Number.parseFloat(b)
const operator= prompt("Select the operator +, -, *, /  ")
let result ;

switch (operator) {
            case '+': result = a + b;
            console.log("This is Value", result);
            
                break;
            case '-':result = a - b ;
            console.log("This is Value", result);
                break;
            case '*': result = a * b;
            console.log("This is Value", result);
                break;
            case '/':result = a / b ;
            console.log("This is Value", result);
              default:
                console.log("Invalid Operator")
            }
            alert(`Result: ${result}`);

    
        