
function cutLine(line) {
    if(line.length <= 20){
        return line;
    } else return (line.substring(0,20) + '...');
}

var c = cutLine('12345678910111');
console.log(c);