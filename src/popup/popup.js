// how to just change data in popup for that particular tab and not others

console.log("yeh hai popup");

chrome.storage.local.get(['key1', 'key2'], function(result) {
    console.log('Value of 1 currently is ' + result.key1);
    console.log('Value of 2 currently is ' + result.key2);
    $("#co2InKg").text(result.key1);
    $("#foodUnit").text(result.key2);
  });
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
 
//     if (request.action === "empty_response") {
//         console.log("request reaching");
//         console.log(request.value);
//         $("#co2InKg").text("69.69");
//     }
//   });
