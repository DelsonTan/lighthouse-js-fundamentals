function loopyLighthouse() {
  var n = 100;
  var d3 = 0;             // variable to check if n is divisible by 3
  var d4 = 0;             // variable to check if n is divisible by 4
  while (n <= 200) {
    d3 = n % 3;
    d4 = n % 4;
    if (d3 == 0) {                      // case: n is divisible by 3
      if (d4 == 0) {                    // case: n is divisible by 3 and 4
        console.log("LoopyLighthouse");
      }
      else
        console.log("Loopy");           // case: n is divisible by 3 but not 4
    }
    else if (d4 == 0) {                 // case: n is divisible by 4 but not 3
      console.log("Lighthouse");
    }
    else {
      console.log(n);                   // case: n is not divisible by 3 or 4
    }
    n++;
  }
  return;
}

loopyLighthouse();