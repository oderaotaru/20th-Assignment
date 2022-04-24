// var input1 = prompt("Enter your name");
// var input2 = prompt("Enter your partner's name");

// function loveCalc(name, partner){
// var result = input1+" and "+input2+" are a "+Math.floor(Math.random() * 101)+"% match"
// alert(result);
// }

// loveCalc(input1, input2);


var input1 = prompt("Enter your name");
var input2 = prompt("Enter your partner's name");
function loveCalc(name, partner){

var random = Math.floor(Math.random() * 101);
if (random > 80){
    var result = "Sweet Love! "+input1+" and "+input2+" are a "+random+"% match"
    alert(result);
} else {
    var result1 = input1+" and "+input2+" are a "+Math.floor(Math.random() * 101)+"% match"
    alert(result1);
}

// if (random < 50){
//     var response = "Ouch! "+input1+" and "+input2+" are only a "+random+"% match"
//     alert(response);
// } else {
//     alert(result1);
// }
}

loveCalc(input1, input2);
