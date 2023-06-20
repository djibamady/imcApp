
function calculateBMI() {
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");
  var resultDiv = document.getElementById("result");

  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.innerHTML = "Entrer un nombre correct !";
    return;
  }

  var bmi = weight / ((height / 100) ** 2);
  var category = "";

  if (bmi < 18.5) {
    category = "Insuffisance pondérale (maigreur)";
  } else if (bmi < 25) {
    category = "Corpulence normale";
  } else if (bmi < 30) {
    category = "Surpoids";
  } else if(bmi < 35) {
    category = "Obésité modérée";
  }else if(bmi < 40) {
    category = "Obésité sévère";
  } else {
          category = "Obésité morbide ou massive";

    }
    

  resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
}