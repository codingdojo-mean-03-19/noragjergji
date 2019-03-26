function fib() {
    var num1 = 0, num2 = 1, num3 = 1;
    function nacci() {
        console.log(num3);
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"