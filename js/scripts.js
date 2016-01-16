$(document).ready(function() {
  $("form#forminfo").submit(function(event) {
    var age = $("select#age").val();
    var color = $("select#color").val();
    var sea = $("select#sea").val();
    var preference = $("select#preference").val();
    var hotcold = $("select#hotcold").val();

    if (age === "old" && (color === "blue" || color === "red") && sea === "yes" && preference === "opera" && hotcold === "hot") {
      $("#rome").show();
    } else if (age === "old" && (color === "blue" || color === "green") && (sea === "yes" || sea === "no") && preference === "opera" && hotcold === "cold") {
      $("#london").show();
    } else if (age === "average" && sea === "yes") {
      $("#rio").show();
    } else if (age === "average" && sea === "no") {
      $("#peru").show();
    } else if (age === "young" && hotcold === "hot") {
      $("#rio").show();
    } else if (age === "young" && hotcold === "cold") {
      $("#london").show();
    } else if (age === "young" && preference === "opera") {
      $("#paris").show();
    } else {
      $("#paris").show();
    }
    $("button#mybutton2").click(function() {
      $(".destination").hide();
    });
  event.preventDefault();
  });
});
