
// Filter :- For returning values from thea array we are using the Filter and if we want to check any condition 
const arr=[1,2,3,4,5,6,7,8,9,10];

const ans=arr.filter((item)=>{
    if(item>5) return item;
})

console.log(ans);


// Map: If v want add any operation like i want to add the value 10 in every elements for Array then 

const result =arr.map((ele)=>{
    return ele+10;
}).map((ele)=>{
    return ele+10;
})

console.log(result);




