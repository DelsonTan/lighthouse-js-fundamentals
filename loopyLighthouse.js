function loopyLighthouse() {

  for (var n = 100; n <= 200; n++) {
    var result = "";
    if (n % 3 === 0) {
      result += "Loopy";
    }
    if (n % 4 === 0) {
      result += "Lighthouse";
    }
    console.log(result === "" ? n : result);
  }
}

loopyLighthouse();