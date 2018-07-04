// ASSUME: date given has valid parameters (months 1-12, day is between 1 and the last day of a given month)

var talkingCalendar = function(date) {
  var result = date.split("/");
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  result[1] = month[Number(result[1]) - 1];
  if (Number(result[2]) == 1) {
    result[2] = "1st";
  }
  else if (Number(result[2]) == 2) {
    result[2] = "2nd";
  }
  else if (Number(result[2]) == 3) {
    result[2] = "3rd";
  }
  else {
    result[2] += "th";
  }
  result = result[1] + " " + result[2] + ", " + result[0];
  return (result);
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));