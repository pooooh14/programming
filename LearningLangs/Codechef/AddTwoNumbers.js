/*  You don't need to add/edit anything to the below solution. 
    Click on the SUBMIT button to solve your first problem on CodeChef.*/

importPackage(java.io);
importPackage(java.lang);
 
let reader = new BufferedReader( new InputStreamReader(System['in']) );

let firstLine = reader.readLine();
var numLines = parseInt(firstLine);


for(let i=0; i<numLines; i++){
    let line = reader.readLine();
    if(line){
        let nums = line.split(" ");
        let a = parseInt(nums[0]);
        let b = parseInt(nums[1]);
        print(a + b);
    }
    
   
}
