// how to just change data in popup for that particular tab and not others

console.log("yeh hai popup");

chrome.storage.local.get(['key1', 'key2', 'key3'], function(result) {
    console.log('Value of 1 currently is ' + result.key1);
    console.log('Value of 2 currently is ' + result.key2);
    console.log('Value of 3 currently is ' + result.key2);
    $("#co2InKg").text(result.key1);
    $("#foodUnit").text(result.key2);
    $("#stars").text(result.key3);

//number of stars    
    var stars=result.key3;
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

//number of trees per kg
    var co2InKg=result.key1;
    var trees=(0.3*co2InKg).toFixed(2);
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
