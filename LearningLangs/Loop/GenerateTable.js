/*
 Question:
 You are given a number. Print a table of that number.
*/
var num = readLine("enter a number");
for(let i=1; i<=10; i++) {
    const result = i * num;
    console.log(num + '*' + i + '=' + result);
}
    
