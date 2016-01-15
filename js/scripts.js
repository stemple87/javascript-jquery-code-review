$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var travel = $("select#travel").val();
    var food = $("select#food").val();
  }


  if (age >= 30 && travel === "italy" && gender === "female" && food === "pizza" || food === "watermelon") {
    $("#steve").show();

  } else if (age <= 22  && travel === "hongKong") {
    $("#gilbert").show();

  } else {
    $("#maggie").show();


  event.preventDefault();
  });
});
