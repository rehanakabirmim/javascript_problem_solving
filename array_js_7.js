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

var str =" tis is a javascript ";
console.log(str.charAt(3));//index er value show kore
console.log(str.charCodeAt(2));//kono character er ascii value show kore charCodeAt.
console.log(str.substr(1,7));//koto ta word kete nite chacchi
console.log(str.trim);//space remove kore
console.log(str. sliceString(2));

console.log(str. trimStart);//shurur space remove kore
console.log(str. trimEnd);//shesher space remove kore
console.log(""/ "/ "); // output " "
console.log("//g//g ");// output // (n.b: ektar jonno // 2ta slace dite hoy)

console.log(str.indexOf('is'));//i er index theke count korbe index number
console.log(str.lastIndexOfindexOf('javascript'));//last  index theke count korbe index number
console.log(str.toUpperCase());
console.log(str[2].toUpperCase());//specific vabe uppercase krte chaile index dhore krte hbe
let str1 ="hello world BD";
console.log(str1.replace(/ /, '-'));//hello - world
console.log(str1.replace(/ /g, '-').toLowerCase());//all replace kore - diye
console.log(str1.replace(/world/i, 'character'));//hello character BD
console.log(str1.endsWith('BD'));//outpu true
console.log(str1.startsWith('BD'));//output false
console.log(str1.split(' '));//output['hello','world','BD'] sobgulo k alada alda kre array te diye dey.
console.log(str1.split['h']);//output['ello','world','BD'] sobgulo k alada alda kre array te diye dey h kete nibe.








