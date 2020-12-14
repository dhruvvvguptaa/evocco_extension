

//get array of fooditems from content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
 
    if (request.action === "groceryArray") {

        var arrayForAPI = request.value; 
        console.log(arrayForAPI);
        // callApi(arrayForAPI);
    }
  });

//   callApi = (arrayForAPI) => {
//     $.ajax({
//         url: "https://reqres.in/api/users?page=2",
//         type: "GET",
//         // data: {
//         //     name: "paul rudd",
//         //     movies: ["I Love You Man", "Role Models"]
//         // },
//         complete: function(data){
//             console.log(data);
//         },
//         success: function(response){
//             console.log(response);
//         }
//     });
//   }

