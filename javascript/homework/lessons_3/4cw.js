/**
 * Created by sone4ko on 13.10.15.
 */
function lovefunc(flower1, flower2){
    if((flower1 % 2 ==0) && (flower2 % 2 !=0)||(flower1 % 2 !=0) && (flower2 % 2 ==0)){
        return true;
    } else return false;
}