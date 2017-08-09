// Business (or back-end) logic:

var galToLiter = function(gal) {
  return gal * 3.78541;
};

// User interface (or front-end) logic:

$(document).ready(function() {
  $("form#gal-liter").submit(function(event) {
    var number1 = parseFloat($("#galinput").val());
    var result = galToLiter(number1);
    $("#output").text(result);
    $("#display").show();
    event.preventDefault();

  });
});
