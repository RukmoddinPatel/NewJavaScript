// Immediatly Invoked Function Expression (IIFE)

// ()();
// first '()' is function execution and the '()' is for calling 


// this is the normal function 
function add(){
    console.log("Connected");
}
add();


// the below is the IIFE


//  For all function we can write the IIFE but if won't " ;" after IIFE function then the next IIFE wont execute 



(function fuc1(){
    console.log("My name is Rukmoddin Nabab Patel");
})();


((name)=>{
    console.log(`My name is ${name}`);
})("Rukmoddin Nabab Patel");





