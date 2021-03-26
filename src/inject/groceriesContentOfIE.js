const itemsArray = [];
const itemCountArray = [];
const finalArray = [];
 
    
var elements = document.getElementsByClassName("checkoutBtn");


for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(event){
        getFinalArray();
        
    });
}



    function getFinalArray(){
        getItemNameArray();
        getItemNumberArray();
        
        for(let i = 0; i<itemCountArray.length; i++){
            let temp = itemCountArray[i];

            for(let j = 0; j<temp; j++){
                finalArray.push(itemsArray[i]);
            }
        }
        console.log(itemsArray);
        console.log(itemCountArray);
        console.log(finalArray);
        
        chrome.runtime.sendMessage({
            action: "groceryArray",
            value: finalArray
        });
    }

        
        //it puts names of item in cart in an array
    function getItemNameArray(){
        var itemName = document.getElementsByClassName("prodName");
        

        for (let i = 0; i< itemName.length; i++){
            itemsArray.push(itemName[i].innerText);

        }

    }


    //it gets the quantity of items in cart in an array
    function getItemNumberArray(){
        var itemCount = document.getElementsByClassName("basketItemQuantity");   

        for (let i = 0; i<itemCount.length; i++){
            if(itemCount[i].defaultValue){
                var numberFromString = parseInt(itemCount[i].defaultValue);
                itemCountArray.push(numberFromString);
                
            } else {
                var numberFromString = parseInt(itemCount[i].innerHTML);
                itemCountArray.push(numberFromString);
                
            }
            
        }
        

    }