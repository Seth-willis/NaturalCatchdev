function handleBackgroundToggling(){
  $( ".transition1" ).click(function() {
    $(this).removeClass("ant-background");
    $(".transition2").addClass("black-spider-background");
    $(".transition3").addClass("cockroach-background");
    $(".transition4").addClass("tick-background");
    $(".transition5").addClass("tick-background");
  });

  $( ".transition2" ).click(function() {
    $(this).removeClass("black-spider-background");
    $(".transition1").addClass("ant-background");
    $(".transition3").addClass("cockroach-background");
    $(".transition4").addClass("tick-background");
    $(".transition5").addClass("tick-background");
  });

  $( ".transition3" ).click(function() {
    $(this).removeClass("cockroach-background");
    $(".transition1").addClass("ant-background");
    $(".transition2").addClass("black-spider-background");
    $(".transition4").addClass("tick-background");
    $(".transition5").addClass("tick-background");
  });

  $( ".transition4" ).click(function() {
    $(this).removeClass("tick-background");
    $(".transition1").addClass("ant-background");
    $(".transition2").addClass("black-spider-background");
    $(".transition3").addClass("tick-background");
    $(".transition5").addClass("tick-background");
  });

  $( ".transition5" ).click(function() {
    $(this).removeClass("tick-background");
    $(".transition1").addClass("ant-background");
    $(".transition2").addClass("black-spider-background");
    $(".transition3").addClass("cockroach-background");
    $(".transition4").addClass("tick-background");
  });
}
