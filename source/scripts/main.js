function addClickHandlers(){
  $( ".insect-trap" ).click(function() {
    $(".sprite-hidden").removeClass("sprite-hidden");
    $(this).addClass("sprite-hidden");
    $(".insect-trap-description-visible").removeClass("insect-trap-description-visible");
    $("section",this).addClass("insect-trap-description-visible");
  });
}
