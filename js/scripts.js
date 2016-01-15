$(document).ready(function() {
  $("form#forminfo").submit(function(event) {
    var age = $("select#age").val();
    var color = $("select#color").val();
    var sea = $("select#sea").val();
    var preference = $("select#preference").val();
    var hotcold = $("select#hotcold").val();

    if (age === "old") {
      $("#rome").show();

    }



  event.preventDefault();
  });
});
