//const person1="aditi";
// const gender1="female";

// const person2="manu";
// const gender2="female";

// const personArray=["aditi","manu"];
// const gender=["female","female"];
// const numOfUsers=personArray.length;

const allUsers=[{
    firstName:"aditi",
    gender:"female",

},{
    firstName:"manu",
    gender:"female",


},{

firstName:"sal",
gender:"female",


}
]
length=allUsers.length;


for (let i=0;i<length;i++){

    if(allUsers[i]["gender"]=="female"){
        console.log(allUsers[i]["firstName"])
    }
}