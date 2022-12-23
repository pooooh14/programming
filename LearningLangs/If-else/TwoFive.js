/*
      Question:
      You are given a number. If a number is only divisible by 2 print "two" or only divisible by 5 print "five" or divisible by both(2,5) print "Both"  else print "nothing".
*/
var num = readInt("give me an integer");
if(num%2 == 0 && num%5 == 0) {
      console.log("Both"); 
}
else if(num%2 == 0) {
    console.log("two");
}
else if(num%5 == 0) {
    console.log("five");
}
else {
    console.log("nothing");
}