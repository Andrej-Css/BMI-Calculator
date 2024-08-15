
  function CalculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = (weight)/(height * height);
    var bmiResult = Math.trunc(bmi);
    document.getElementById("result").innerText = bmiResult;

    checkBMI(bmiResult); 
}

function checkBMI(bmiValue) {
    var resultElement = document.getElementById("result");

    // Remove previous classes
    resultElement.classList.remove("result-underweight", "result-normalWeight", "result-overWeight", "result-obese");

    // Add the appropriate class based on the BMI value
    if (bmiValue <= 19) {
        resultElement.classList.add("result-underweight");
    } else if (bmiValue > 19 && bmiValue <= 24) {
        resultElement.classList.add("result-normalWeight");
    } else if (bmiValue >24 && bmiValue <= 39) {
        resultElement.classList.add("result-overWeight");
    } else {
        resultElement.classList.add("result-obese");
    }
}