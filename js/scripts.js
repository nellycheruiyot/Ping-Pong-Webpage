$(document).ready(function(event) {
  $(".menu").click(function() {
    $(".menulist").toggle();
    //$(".walrus-hidden").toggle();

    event.preventDefault();
  });
});
//  $(".scroll").click(function(event){
//    event.preventDefault();
  //  $('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
