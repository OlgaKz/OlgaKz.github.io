/**
 * Created by sone4ko on 10.10.15.
 */
prime:for (var n = 2; n<10; n++) {
    for( var m =2; m<n; m++ )
        if (n % m==0) continue prime;{
        console.log(n)}
}

