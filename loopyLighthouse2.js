function loopyLighthouse(range, multiples, words) {
  var n = range[0];       // initialize n as the start value for the loop
  var d3 = multiples[0];  // variable to check if n is divisible by first multiple
  var d4 = multiples[1];  // variable to check if n is divisible by second multiple
  while (n <= range[1]) { // while loop that stops when n is at the end value
    d3 = n % multiples[0];
    d4 = n % multiples[1];
    if (d3 == 0) {                      // case: n is divisible by first multiple
      if (d4 == 0) {                    // case: n is divisible by first and second multiple
        console.log(words[0] + words[1]);
      }
      else                              // case: n is divisible by first but not second multiple
        console.log(words[0]);
    }
    else if (d4 == 0) {                 // case: n is divisible by second but not first multiple
      console.log(words[1]);
    }
    else {
      console.log(n);                   // case: n is not divisible by first or second multiple
    }
    n++;
  }
  return;
}

loopyLighthouse([150, 250],[4, 5], ["ping", "pong"]);