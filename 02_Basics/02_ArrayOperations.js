const names=["Rukmoddin","Maktum","Amina","Mahibub"];
const city=["Miandargi","Akkalkot","Solapur"];


// Merging arrays

// names.push(city);
// console.log(names);

// names.concat(city);
// console.log(names);

// const arr=names.concat(city);
// console.log(arr);

const mergeArr=[...names,...city];
console.log(mergeArr);


const arr2=[1,2,3,[5,6,7],[9,8,6,[6,7,84,[34,2]]]];

const realArr=arr2.flat(3);// How much the nested array are there in a array or U can just write the infinity
console.log(realArr);








