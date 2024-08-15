
  function CalculateBMI() {
    var weight = document.getElementById("weight").value; // returneaza valoarea elementului
    var height = document.getElementById("height").value; // returneaza valoarea elementului
    var bmi = (weight)/(height * height); //adaugam formula de calcul
    var bmiResult = Math.trunc(bmi); //scapam de zecimale
    document.getElementById("result").innerText = bmiResult; //din html in valoarea result adaugam bmiResult

    checkBMI(bmiResult); //chem functia checkBMI, important! fara aceasta componenta urmatoarea parte a codului nu mai ruleaza. Intrebare: de ce functioneaza checkBMI daca este definita abia mai jos. Raspuns (cred): nu conteaza ordinea de aparitie a functiilor in JS. 
}

function checkBMI(bmiValue) { //definim aceasta functie cu scopus de a o lega de CSS
    var resultElement = document.getElementById("result"); //Intrebare: de ce iau "result" si nu bmiResult. Raspuns: "result" este ID ul. 

    // scot clasele, ca si in exemplul din curs. Cred ca e folosita sa stearga orice posibilitate de a avea conflicting-styles.
    resultElement.classList.remove("result-underweight", "result-normalWeight", "result-overWeight", "result-obese");

    //adaugam conditii pt fiecare caz  
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
