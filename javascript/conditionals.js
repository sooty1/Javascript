// if statements => checking for a single condition 
//allows to control the flow of code 

// if (the condition) {
//     run this code 
// }

if ("tom"==="tom"){
    console.log("yay tom");
}
if ("tom"==="om"){
    console.log("yay tom");
}

let time = 0700 
if (time === 0700){
    console.log("0700");
}

// if else statement => checking for two conditions   if then run if not then run something else 

// let score = 10 
// if (score === 10 ){
//     console.log('Grade A')
// } else {
//     console.log("Grade B")
// }

// if else statement => checking for more than two conditions 
// let score = 10;
// if (score === 10){
//     console.log("Grade A");
// } else if (score === 9 ){
//     console.log("Grade B");
// } else if (score ===8){
//     console.log("Grade C");
// } else {
//     console.log('Grade F');
// }

//switch statement => cehcking for a single condtion 
let score = 10; 
switch(score){
    case 10:
        console.log("Grade A")
}

// default statement => checking for two conditions
let pet = 10;
switch(score){
    case 10:
        console.log("Grade A");
        break;
    default:
        console.log("Grade B");
}

//switch default statement => checking for more than two conditions

let car = 8;
switch(car){
    case 10:
        console.log("Grade A");
        break;
    case 8 :
        console.log("Grade B");
        break;
    default:
        console.log("Grade F")
}