function cal() {
   const height = document.getElementById('height').value;
   const weight = document.getElementById('weight').value;
    
   let result = (weight / Math.pow(height / 100 , 2)).toFixed(1);
   

   if (result <= 18.4) {
    document.getElementById('statement').innerHTML = "Underweight";

    } else if (result >= 18.5 && result <= 24.9) {
    document.getElementById('statement').innerHTML = "Yey Normal"; 

    } else if (result >= 25.0 && result <= 39.9) {
    document.getElementById('statement').innerHTML ="Overweight"; 

    } else if (result >= 40.0) {
        document.getElementById('statement').innerHTML = "Oops Obese"; 
    
        }
    
  document.getElementById('result').innerHTML = result;
 };


