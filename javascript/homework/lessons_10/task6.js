var a;
function getType(arg){
       return typeof(arg);
   }

console.log(getType('10'));
console.log(getType(10));
console.log(getType(true));
console.log(getType({}));
console.log(getType(a));
console.log(getType(Array));