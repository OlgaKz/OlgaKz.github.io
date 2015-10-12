/**
 * Created by sone4ko on 12.10.15.
 */
function pow(x,n){
    var a = x;
    for(var i = 1; i<n; i++) {
        x = x * a;
    }
    return x;
}
d = pow(2,3);
console.log(d);