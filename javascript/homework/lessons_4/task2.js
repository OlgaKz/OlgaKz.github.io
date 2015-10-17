/**
 * Created by sone4ko on 14.10.15.
 */
function checkSpam(str) {
    var lowerStr = str.toLowerCase();
    if (lowerStr.indexOf('sex')>=0){
        return true;
    } else if (lowerStr.indexOf('spam')>=0){
        return true;
    } else return false;
}

console.log( checkSpam('get new Sex videos') );
console.log(checkSpam('[SPAM] How to earn fast money?'));
console.log(checkSpam('New PSD template'));