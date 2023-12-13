import { readFile, writeFile } from "fs";

function putCopyrightToFile(cb){
    readFile("a.txt","utf-8",function(err,data){
        data=data+ "copyright ";
        writeFile("a.txt",function(){
            cb()
        })
    });

    putCopyrightToFile(function(){
        console.log("copyright has been put")
    })
}