// how to just change data in popup for that particular tab and not others


chrome.storage.local.get(['co2InKg', 'foodUnit', 'star'], function(result) {
    console.log('Value of 1 currently is ' + result.co2InKg);
    console.log('Value of 2 currently is ' + result.foodUnit);
    console.log('Value of 3 currently is ' + result.star);

    if(result.co2InKg){
        $("#co2InKg").text(result.co2InKg);
        $("#foodUnit").text(result.foodUnit);
        $("#stars").text(result.star.toFixed(1));
    
        displayStarsOnPopup(result.star);
        //number of stars    
            var stars=result.star;
            console.log(stars);
        
        //number of trees per kg
            var co2InKg=result.co2InKg;
            var trees=(0.3*co2InKg).toFixed(1);
            if(trees>1)
            $("#treesperkg").text(trees+" trees");
            else
            $("#treesperkg").text(trees+" tree");
        
        //cost of offsetting
            var cost=(0.075*co2InKg).toFixed(2);
            $("#costoffset").text(cost);
        
    }

    else{
    $("#co2InKg").text("0.0");
    $("#foodUnit").text("0.00");
    $("#stars").text("0.0");
    }
    
});
    




$(document).ready(function () {
  $("#home-icon").on("click", function () {      
    $(".summary-body").removeClass("hidden");
    $(".popup-body").addClass("hidden");
    $(".progress-body").addClass("hidden");
    $(".payment-registration-body").addClass("hidden");
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
    $(".popup-body").addClass("hidden");
    $(".payment-registration-body").addClass("hidden");
    //buttons color change
    $("#progress-icon").addClass("progressnoticon");
    $("#home-icon").removeClass("homenoticon");
    //arrow
    $("#arrow").addClass("hidden");
    $(".heading-name").removeClass("heading-name-mod");
  });


  $("#moneyButton").on("click", function () {      
    $(".summary-body").addClass("hidden");
    $(".payment-registration-body").removeClass("hidden");
    //buttons color change
    $("#home-icon").removeClass("homenoticon");
    $("#progress-icon").removeClass("progressnoticon");
    //arrow
    
    $("#arrow").removeClass("hidden");
    $(".heading-name").addClass("heading-name-mod");
    
    $("#arrow").on("click", function () {
        $("#arrow").addClass("hidden");
        $(".heading-name").removeClass("heading-name-mod");        
        $(".payment-registration-body").addClass("hidden");
        $(".summary-body").removeClass("hidden");
        $("#home-icon").addClass("homenoticon");
    });
  
  });


  $("#moneyButton").mouseover(function(){
    if($("#costoffset").text()==="0.00"){
        console.log($("#costoffset").text()+"----"+ $("#moneyButton").text());
        $("#moneyButton").prop('disabled', true);
         
     }
     else{
         
        $("#moneyButton").removeAttr("disabled");
     }
    
})


  

});


displayStarsOnPopup = (stars) => {

    if(stars==5){
        setFullStarImage(5);
        setFullStarImage(4);
        setFullStarImage(3);
        setFullStarImage(2);
        setFullStarImage(1);
    }

    else if(stars==4){
        setEmptyStarImage(5);
        setFullStarImage(4);
        setFullStarImage(3);
        setFullStarImage(2);
        setFullStarImage(1);
    }
    
    
    else if(stars==3){
        setEmptyStarImage(5);
        setEmptyStarImage(4);
        setFullStarImage(3);
        setFullStarImage(2);
        setFullStarImage(1);
    }

    else if(stars==2){
        setEmptyStarImage(5);
        setEmptyStarImage(4);
        setEmptyStarImage(3);
        setFullStarImage(2);
        setFullStarImage(1);
    }

    else if(stars==1){
        setEmptyStarImage(5);
        setEmptyStarImage(4);
        setEmptyStarImage(3);
        setEmptyStarImage(2);
        setFullStarImage(1);
    }

    else if(stars == 0){
        setEmptyStarImage(5);
        setEmptyStarImage(4);
        setEmptyStarImage(3);
        setEmptyStarImage(2);
        setEmptyStarImage(1);
    }

}


setFullStarImage = (number) => {
    $("#"+number+"star").attr("src","/icons/star_full_green (1).png");
}

setEmptyStarImage = (number) => {
    $("#"+number+"star").attr("src","/icons/star_empty_green (1).png");
}