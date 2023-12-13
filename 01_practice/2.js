function calculateArea(length, width) {
    const area = length * width;
    console.log(area);
  }
  
  const length1 = 5;
  const width1 = 3;
  calculateArea(length1, width1); // 15
  
  
  const length2 = 8;
  const width2 = 4;
  calculateArea(length2, width2); // 32

  function calculateSumAndDifference(a, b) {
    return [a + b, a - b];
  }
  
  const result = calculateSumAndDifference(5, 3);
  console.log(result[0], result[1]); // 8, 2


  /////////////////////////////////////ARROW FUNCTIONS////////////////////////////////////

  const greet = () => {
    console.log("Hello there!");
  };
  
  greet(); // Call the arrow function
  //////////////////////immediately invoked functions////////////////////////////


(function() {
    console.log("Hello World!")
  })(); // Hello World!

