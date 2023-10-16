// normal function
console.log(addition(10,30));
function addition(a,v){
    
    return  c=a + v;
    
}
//anoymonus function
var fun = function(a,b){
    return c= a-b;

}
console.log(fun(10,30));

//array function

var arra= (a,c) =>{
    console.log(a*c);
}
arra(2,4);

//or 
var arra= (a,c) => a*c;
    

console.log(arra(2,4));

// all function

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

