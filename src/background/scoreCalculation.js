var temp = 0;

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
        products: arrayForAPI
    }


    $.ajax({
        url: "https://beta-api.evocco.com/basket-score",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data),

        complete: function(data){
            // console.log(data);
        },
        success: function(response){
            console.log(response);    
            ApiResponseManipulation(response)
        },
        error: function(err){
            console.log(err);
        }
    });
  }

  
  ApiResponseManipulation = (response) => {

    
    if(response.num_identified_items === 0){

        console.log("aagya yahan");

        // chrome.runtime.sendMessage({
        //     action: "empty_response", 
        //     value: 0
        // });
        chrome.storage.local.set({key1: Math.random()*100, key2: Math.random()*100}, function() {
            console.log('Value is set '+temp );
          });

    }else{

        var co2InKg = (response.overall_co2_impact / 1000).toFixed(2);
        var foodUnit = response.overall_food_unit;
        var score = response.overall_score;
    }


  }

