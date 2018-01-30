function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
};

Person.prototype.calculate_bmi = function(id) {
  calculator = new BMICalculator();
  calculator.bmi(this, id);
};

// Person.prototype.calculate_bmi_imperial = function() {
//     calculator = new BMICalculator();
//     calculator.bmi(this);
// }
