

//get array of fooditems from content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
 
    if (request.action === "groceryArray") {

        var arrayForAPI = request.value; 
        console.log(arrayForAPI);
        callApi(arrayForAPI);
    }
  });

    


  callApi = (arrayForAPI) => {

    
    var data = {
        api_key: "W_s5jlxqHcz4qAkK1ld3RkgqhPU",
        products: ["Tomatoes", "potato"]
    }


    $.ajax({
        url: "https://beta-api.evocco.com/basket-score",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data),

        complete: function(data){
            console.log(data);
        },
        success: function(response){
            console.log(response);            
        }
    });
  }

