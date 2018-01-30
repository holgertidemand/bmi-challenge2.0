$(document).ready(function () {
  $('#imperial').click(function(){
    active_system(this, '#metric');
        $('#calculate').click(function () {
            var w = parseFloat($('#weight').val());
            var h = parseFloat($('#height').val());
            var person = new Person({weight: w, height: h});
            person.calculate_bmi_imperial();
            $('#display_value').html('Your BMI is ' + person.bmiValue);
            $('#display_message').html('and you are '+ person.bmiMessage);
        });
    });
});


$(document).ready(function () {
    $('#metric').click(function(){
      active_system(this, '#imperial');
        $('#calculate').click(function () {
            var w = parseFloat($('#weight').val());
            var h = parseFloat($('#height').val());
            var person = new Person({weight: w, height: h});
            person.calculate_bmi_metric();
            $('#display_value').html('Your BMI is ' + person.bmiValue);
            $('#display_message').html('and you are '+ person.bmiMessage);
        });
    });
});

function active_system(button, id){
  if($(button).hasClass('active')){
      $(button).removeClass('active');
      $(id).addClass('active');
  } else {
      $(button).addClass('active');
      $(id).removeClass('active');
  }
}
