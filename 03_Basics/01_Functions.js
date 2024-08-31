
function MyFunc(){
    console.log("P");
    console.log("A");
    console.log("T");
    console.log("E");
    console.log("L");
}

MyFunc()


function addTwoNum(num1,num2){
    return ans=num1+num2;
}

let add=addTwoNum(1,2);
console.log(add);


// Accepting multiple values from the user 
function myFuntionName(...num1){
    return num1;
}

// Passing array to function 

const myNewArray=[200,400,100,600];
console.log(myFuntionName(200,400,500,20000));
console.log(myFuntionName(myNewArray));

// Passing object to a function


const user={
    username:"hitesh",
    price:199
}

myFuntionName(user);











