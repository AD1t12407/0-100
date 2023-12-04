const arr=[12,34,56,78,90];
numArr=arr.length;

for(let i=0;i<numArr;i++){
    number=arr[i];

    let reversedNumber=0;
    while (number > 0) {
       
        const lastDigit = number % 10;

        reversedNumber = reversedNumber * 10 + lastDigit;

        number = Math.floor(number / 10);
    }
    console.log(reversedNumber);
}




