
const name1={
    first:"aditi",
    second:"siri",
    id:701,
    full:function(){
        return this.first+" "+this.second;
    }


}
console.log(name1.full())

const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}

