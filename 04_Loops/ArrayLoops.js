// CallBack function meaning is that having no name to the function






// const arr=[1,2,3,4,5,6,7,8,9];

// for(const num of arr){
//     console.log(num);
// }

// const s="Rukmoddin Nabab Patel";

// for(let ch of s){
//     console.log(ch);
// }


// const mp=new Map();
// mp.set(1,"Rukmoddin"),
// mp.set(2,"Maktum"),
// mp.set(3,"Amina"),
// mp.set(4,"Mahibub")
// mp.set(5,"Noorjahan"),
// mp.set(6,"Nabab")


// for(const [key,value] of mp){
//     console.log("key: "+key,"Value: "+value );
// }




// We use " FOR IN LOOP" not the "FOR OF LOOP"

// const obj={
//     name:"Rukmoddin",
//     city:"Pune",
//     Age:19,
//     Gender:"Male",
//     Occupation:"Student",
//     College: "VIT Pune",
// }


// for(const ele in obj){
//     console.log(ele);
//     console.log(`The key is ${ele} and its value is ${obj[ele]}`);
    
// }

const coding =["js","ruby","java","python","cpp"];

coding.forEach( function (item){
console.log(item);

})

const info=[
    {
        name:"Rukmoddin",
        age:19,
        current:"Student",
        city:"Pune"
    },
    {
        name:"Maktum",
        age:23,
        current:"Student",
        city:"Maindargi"
    } 
    ,  
    {
        name:"Amina",
        age:25,
        current:"Student",
        city:"Sindagi"
    }, 
    {
        name:"Mahibub",
        age:30,
        current:"Services",
        city:"Maindargi"
    }

]

info.forEach((item)=>{
    console.log(item.name);
    
})
