$(document).ready(function() {
  $('#metric').click(function() {
    active_system(this, '#imperial', '.display');
    display_message('height', 'Height, cm');
    display_message('weight', 'Weight, kg');
  });
  $('#imperial').click(function() {
    active_system(this, '#metric', '.display');
    display_message('height', 'Height, inches');
    display_message('weight', 'Weight, lbs');
  });
  $('#calculate').click(function() {
    var w = parseFloat($('#weight').val());
    var h = parseFloat($('#height').val());
    var person = new Person({
      weight: w,
      height: h
    });
    if ($('#metric').hasClass('active')) {
      person.calculate_bmi("metric");
    } else {
      person.calculate_bmi("imperial");
    }
    $('#display_value').html('Your BMI is ' + person.bmiValue);
    $('#display_message').html('and you are ' + person.bmiMessage);
  });
});

function active_system(button, id, class_display) {
  if ($(button).not('active')) {
    $(button).addClass('active');
    $(id).removeClass('active');
  }
}

function display_message(id, msg) {
  var bob = document.getElementById(id);
  bob.placeholder = msg;
}
