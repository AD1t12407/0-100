    function prev_sum(num1, num2) {

    let result = num1 + num2;
    
    return result;
    
    }
    
    function sum(num1, num2,fnTocall) {

        let result = num1 + num2;
        
        fnTocall(result);
        
        }
    function displayResult (data) {
    
    console. log("Result of the sum is : " + data);
    
    }
    function displayResultPassive(data) {
    
    console. log("Sum's result is : " + data);
    
    }
     // You are only allowed to call one function after this
    // How will you displayResult of a sum
    
    //what i did
    console.log(displayResult(prev_sum(2,3)),displayResultPassive(prev_sum(3,4)));

    //what was expected--called callback
    const ans=sum(1,2,displayResult);
