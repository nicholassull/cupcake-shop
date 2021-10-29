$(document).ready(function() {
  $(".p-one").click(function() {
    $(".p-two").removeClass("highlight");
    $(".p-one").addClass("highlight");
  });
  $(".p-two").click(function(){
    $(".p-one").removeClass("highlight");
    $(".p-two").addClass("highlight");
  });
});