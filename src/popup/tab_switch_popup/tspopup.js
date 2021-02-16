$(document).ready(function () {
    $("#home-icon").on("click", function () {      
      $(".summary-body").removeClass("hidden");
     
      $(".progress-body").addClass("hidden");
      
      //buttons color change
      $("#home-icon").addClass("homenoticon");
      $("#progress-icon").removeClass("progressnoticon")
      //arrow
      $("#arrow").addClass("hidden");
      $(".heading-name").removeClass("heading-name-mod");
    });
  
    $("#progress-icon").on("click", function () {
           
      $(".summary-body").addClass("hidden");
      $(".progress-body").removeClass("hidden");
     
      
      //buttons color change
      $("#progress-icon").addClass("progressnoticon");
      $("#home-icon").removeClass("homenoticon");
      //arrow
      $("#arrow").addClass("hidden");
      $(".heading-name").removeClass("heading-name-mod");
    });
});