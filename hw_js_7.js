//ARRAY
// 1.concat
let array=[1,3,6];
let barray=[5,8,6];
let carray=array.concat(barray);
console.log(carray);

// 2.slice
let a=[2,4,5];
let b=[9,8,4];
// let output=b.slice(0,2);//positive er smy 0 left to right  count kora hoy index number.
let output=b.slice(-3,-2);//negative er smy -1 right to left count kora hoy index number.
console.log(output);

// 3.splice
let a1=[2,4,5];
let b2=[9,8,4,9,45,67];
b2.splice(1,3,67);//3index deya te ekhane (8,4,9)delete hoye 67 bosche.
console.log(b2);





