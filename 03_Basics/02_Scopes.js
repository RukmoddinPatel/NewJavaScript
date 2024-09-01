let a=20;
const b=300;
var c=100;


console.log(a);
console.log(b);
console.log(c);


// function one(){
//     const username="rukmoddin"
//     function two(){
//         const circus="Alankaar";
//         console.log(username);
//     }
//     console.log(circus);
//     two();
// }

// one();



// +++++++++++++++ INTERSTING +++++++++++++++++




//  this  is not giving any error if i am calling the fcuntion before declaration 
console.log("Function 1",addOne(5));


function addOne(num){
    return num+1;
}
console.log("Function 1",addOne(5));


//  this  is  giving any error if i am calling the fcuntion before declaration 
console.log("Function 2",addTwo(5));


const addTwo=function(num){
    return num+2;
}
console.log("Function 2",addTwo(5));






