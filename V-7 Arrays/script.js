/*const a=[3,5,7,8,9];
console.log("Ratnesh");
console.log(a.length);
a[2]=6;
console.log(a);

let marks = [80, 90, 65, 84, 90, 89, 99];
for (let i = 0; i < marks.length; i++) {
    console.log("The Marks is ", marks[i]);
}
 



                // Array.form \

                let name = prompt("Enter Your Any Tupe of Element:")
                let arr= Array.from(name)
                console.log(arr );
                
            

                   // for...of \
                   let num = [3, 5, 1, 2, 4];
                   for (const i of num) {
                    console.log(i);
                    
                    }
                   console.log(num);
                

                     
                   // for...im \

                   let num2 = [3, 5, 1, 2, 4];
                   for (const i in num2) {
                    console.log(i);
                    
                    }
                  
                
                    // Array.map

                    let arr = [1, 2, 3];
                    let a = arr.map((value, index, Array)=>{
                        console.log(value, index, Array);
                        return value + index

                        
                    })
                    console.log(a);
                  


                    // Array.filter Method 

                   let arr2 = [20, 56, 10, 2, 9, 12, 36, 11]
                   let a2 = arr2.filter((a)=>{
                        return a<10
                       })
                        console.log(a2, arr2);
    */

                    // Array.reduce Method 


                   let arr3 = [1, 2, 3, 4, 5, 6]

                   const reduce_func = (R1, R2)=>{
                    return R1 + R2;
                   }
                   let a3 = arr3.reduce(reduce_func );
                        
                   
                        console.log(a3);