function BMICalculator(){
};

var IMPERIAL_CONSTANT = 703;

// BMICalculator.prototype.imperial_bmi = function(obj) {
//   var weight = obj.weight;
//   var height = obj.height;
//   if (weight > 0 && height > 0) {
//     var finalBmi = (weight * IMPERIAL_CONSTANT) / Math.pow(height, 2);
//     obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
//     setBMIMessage (obj)
//   }
// };
//
//
// BMICalculator.prototype.metric_bmi = function(obj) {
//   var weight = obj.weight;
//   var height = obj.height;
//   if (weight > 0 && height > 0) {
//     var finalBmi = weight / (height / 100 * height / 100);
//     obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
//     setBMIMessage (obj)
//   }
// };

BMICalculator.prototype.bmi = function(obj, id) {
  var weight = obj.weight;
  var height = obj.height;
  if (weight > 0 && height > 0) {
      if (id === 'metric') {
          var finalBmi = weight / (height / 100 * height / 100);
          obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
          setBMIMessage (obj);
      } else if (id === 'imperial') {
          var final_Bmi = (weight * IMPERIAL_CONSTANT) / Math.pow(height, 2);
          obj.bmiValue =  parseFloat(final_Bmi.toFixed(2));
          setBMIMessage (obj);
      } else {
        alert('FAIL');
      }
  }
};

function setBMIMessage (obj){
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "Underweight"
  }
  if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal"
  }
  if (obj.bmiValue > 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight"
  }
  if (obj.bmiValue > 30) {
    obj.bmiMessage = "Obese"
  }
  if (obj.bmiValue > 185.5) {
      obj.bmiMessage = "You have higher BMI than JON BROWER MINNOCH"
      }
}
