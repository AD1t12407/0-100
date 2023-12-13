function onDone(content){
    console.log(content);

}

readFile("a.txt",onDone);//async call

console.log("hi der!");
for (let i=0;i<1000;i++){
    
}