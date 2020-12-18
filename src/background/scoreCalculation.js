

//get array of fooditems from content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
 
    if (request.action === "groceryArray") {

        var arrayForAPI = request.value; 
        console.log(arrayForAPI);
        callApi(arrayForAPI);
    }
  });

  callApi = (arrayForAPI) => {
    $.ajax({
        url: "https://api.evocco.com/basket-score-ui-demo",
        type: "POST",
        data: {
            products: "Tomatoes, potato"
        },

        complete: function(data){
            console.log(data);
        },
        success: function(response){
        
            $(response)
            .find('.table')
             .each(function(i,el){
              console.log(el);
         });
            
        }
    });
  }

