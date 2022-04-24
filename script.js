var input1 = prompt("Enter your name");
var input2 = prompt("Enter your partner's name");

function loveCalc(name, partner){
var result = input1+" and "+input2+" are a "+Math.floor(Math.random() * 101)+"% match"
alert(result);
}

loveCalc(input1, input2);
