function AditiAsyncFunction(){
    let p=new Promise(function(resolve){ 
        resolve("hi der!");
    });
    return p;
}
console.log("hello");
