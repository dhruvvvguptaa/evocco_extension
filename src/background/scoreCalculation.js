

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
            ApiResponseManipulation(response);
        },
        error: function(err){
            console.log(err);
        }
    });
  }

  
  ApiResponseManipulation = (response) => {

    
    if(response.num_identified_items === 0){

        
        chrome.storage.local.set({co2InKg: 0.00, foodUnit: 0.00, star: 0}, function() {
            console.log('Value is set ' );
          });

    }else{

        var co2InKg = (response.overall_co2_impact ).toFixed(2);
        var foodUnit = response.overall_food_unit;
        var score = response.overall_score;
        var star=0;
        if(score<=433){
            star=5;
        }
        else if(score<=698.5){
            star=4;
        }
        else if(score<=1203){
            star=3;
        }
        else if(score<=1591.5){
            star=2;
        }
        else star=1;

        chrome.storage.local.set({co2InKg: co2InKg, foodUnit: foodUnit, star: star}, function() {
            console.log('Value is set ' );
          });
    }


  }

