function AditiAsyncFunction(callback){
    callback("hi der!");

}

async function main(){
    AditiAsyncFunction(function(value){
        console.log(value)
    });
}
main();