const arr=[1,2,3,4,5,6,7,8,9];


const ans=arr.reduce((accumulator,currVal)=>{
    return accumulator+currVal;
},0)

const name =arr.reduce((acc,currVal)=>(acc+=currVal),0);

console.log(name);

// console.log(ans);

// similary for having the objects in array we can put this method 
