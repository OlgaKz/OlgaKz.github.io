/**
 * Created by sone4ko on 11.10.15.
 */
for (var n = 1; n <= 100; n++) {

    res = logic_n(n);
    console.log(res);
}

function logic_n(a){
    if (a % 3 == 0) {
        return( a + ', ' + 'Fizz');
    } else if (a % 5 == 0 && a % 3 != 0) {
        return( a + ', ' + 'Buzz');
    } else return a;
}