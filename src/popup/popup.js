// how to just change data in popup for that particular tab and not others

console.log("yeh hai popup");

chrome.storage.local.get(['co2InKg', 'foodUnit', 'star'], function(result) {
    console.log('Value of 1 currently is ' + result.co2InKg);
    console.log('Value of 2 currently is ' + result.foodUnit);
    console.log('Value of 3 currently is ' + result.star);
    $("#co2InKg").text(result.co2InKg);
    $("#foodUnit").text(result.foodUnit);
    $("#stars").text(result.star);

//number of stars    
    var stars=result.star;
    console.log(stars);

    if(stars==4)
    $("#5star").attr("src", "/icons/star_empty_green (1).png");
    
    else if(stars==3){
      $("#5star").attr("src", "/icons/star_empty_green (1).png");
      $("#4star").attr("src", "/icons/star_empty_green (1).png");}

    else if(stars==2){
      $("#5star").attr("src", "/icons/star_empty_green (1).png");
      $("#4star").attr("src", "/icons/star_empty_green (1).png");
      $("#3star").attr("src", "/icons/star_empty_green (1).png");}

    else if(stars==1){
      $("#5star").attr("src", "/icons/star_empty_green (1).png");
      $("#4star").attr("src", "/icons/star_empty_green (1).png");
      $("#3star").attr("src", "/icons/star_empty_green (1).png");
      $("#2star").attr("src", "/icons/star_empty_green (1).png");}

    else if(stars == 0){
      $("#5star").attr("src", "/icons/star_empty_green (1).png");
      $("#4star").attr("src", "/icons/star_empty_green (1).png");
      $("#3star").attr("src", "/icons/star_empty_green (1).png");
      $("#2star").attr("src", "/icons/star_empty_green (1).png");
      $("#1star").attr("src", "/icons/star_empty_green (1).png");}
      

//number of trees per kg
    var co2InKg=result.co2InKg;
    var trees=(0.3*co2InKg).toFixed(1);
    $("#treesperkg").text(trees);

//cost of offsetting
    var cost=(0.075*co2InKg).toFixed(2);
    $("#costoffset").text(cost);
  });
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
 
//     if (request.action === "empty_response") {
//         console.log("request reaching");
//         console.log(request.value);
//         $("#co2InKg").text("69.69");
//     }
//   });
