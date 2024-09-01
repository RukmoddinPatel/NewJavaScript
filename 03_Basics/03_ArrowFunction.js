
// // We can only use the "THIS KEYWORD" in the Object 
const user ={
    userName:"Rukmoddin",
    id:123,
    location:"Pune",

    welcomeMessage: function(){
        console.log(`${this.userName},welcome to website`);
    }
}



// We can't use "THIS KEYWORD"  in the function except the "ARROW FUNCTION"

// Method 1 : For function declaration 
function call1(){
    const name="Rukmoddin Nabab Patel"
    console.log(this.name);
}

call1();

// Method 2: For function declaration

const call2=function(){
    const name="Rukmoddin Nabab Patel"
    console.log(this.name);
    
}

call2();

// Method 3: For function declaration

const arrow=()=>{
    const name="Rukmoddin Nabab Patel"
    console.log(name);
}

arrow();


// We can also define the function using the below 

// returning explicitly
const addTwo=(num1,num2)=>{
    return num1+num2;
}

// OR 
// returining implicitly 
const add=(num1,num2)=>(num1+num2);














