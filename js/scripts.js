$(document).ready(function() {
  $("form#formgroup").submit(function(event) {
    var age = $("select#age").val();
    var color = $("select#color").val();
    var sea = $("select#sea").val();
    var preference = $("select#preference").val();
    var hotcold = $("select#hotcold").val();




    $("#peru").show();



  event.preventDefault();
  });
});
