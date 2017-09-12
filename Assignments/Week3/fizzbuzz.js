function fizzBuzz(start, end){
  for(i=start; i<=end; i++){
    if (i%3 == 0) {
      if (i%5 == 0) {
        console.log("FizzBuzz");
      }
      console.log("Fizz");
    } else if (i%5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
