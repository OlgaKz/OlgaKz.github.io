/**
 * Created by sone4ko on 11.10.15.
 */

for (var a = 1; a <= 8; a++) {
    process.stdout.write('\n');
    if (a % 2 != 0) {
        process.stdout.write('#');
    } else if (a % 2 == 0) {
        process.stdout.write(' ');
    }
    for (var b = 2; b <= 8; b++) {
        if ((a % 2 != 0) && (b % 2 == 0)) {
            process.stdout.write(' ');
        } else if ((a % 2 == 0) && (b % 2 != 0)) {
            process.stdout.write(' ');
        } else process.stdout.write('#');
    }
}

