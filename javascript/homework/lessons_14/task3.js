function f(){
    console.log('Hello!');
}
Function.prototype.defer = function(ms){
    setTimeout(this, ms);
};
function s(){
    console.log('Allo');
}
f.defer(1000);
s.defer(2000);