let models = {
    0:0,
    1:0,
    2:0,
    3:0,
  }
  let model_values = "";
  function RegisterNewVote(){
  var Promt_value = Number(prompt("Which is the best indian car?\n0: Maruthi\n1: Hyundai\n2: KIA\n3: Ford"));
  if(Promt_value >= 0 && Promt_value <= 3){
    var value = models[Promt_value];
    value++;
    models[Promt_value]=value;
    model_values = Object.values(models);
    DisplayResults(model_values);
  }
  else{
    alert("Enter valid number")
  }
  }
  function DisplayResults(model_values){
    console.log("Poll results are " + model_values);
  }
  DisplayResults();
  