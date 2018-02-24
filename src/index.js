module.exports = function getZerosCount(number) {
    number -= number % 5;

    var n = 0;

    var i = 1;

    while(Math.pow(5, i) < number){
        n += parseInt(number / Math.pow(5, i));
        i++;
    }

    return n;
}
