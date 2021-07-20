let models={
  0:0,
  1:0,
  2:0,
  3:0
}
let model_values="";
let Prompt_input="";
function registerNewVote(){
}
function inputValue(){
  Prompt_input=(prompt("Which is the best indian car?\n0: Maruthi\n1: Hyundai\n2: KIA\n3: Ford"));
  return Prompt_input;
  }
function EvaluateVotes(Prompt_input){
  try{
    if(Prompt_input<0||Prompt_input>3) throw "Enter valid number"
    if (isNaN(Prompt_input)){Prompt_input=String(Prompt_input); throw "Enter only number"}
  }
  catch(err){
    return err;
  }

if(Prompt_input >= 0 && Prompt_input <= 3){
 var value = models[Prompt_input];
 value++;
 models[Prompt_input] = value;
 model_values = Object.values(models);
 return displayResults(model_values);
}
}
function displayResults(model_values){
 return "Poll results are :"+ model_values;
}
function registerNewVote(){
  var Prompt_input =inputValue();
  var result= EvaluateVotes(Prompt_input);
  return result;
}
console.log(registerNewVote());

module.exports = {
  EvaluateVotes
}
