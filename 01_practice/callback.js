function square(a){
    return a*a;

}
function sum(a,b,fn){
    return fn(a)+fn(b);

}

console.log(sum(2,5,square));
