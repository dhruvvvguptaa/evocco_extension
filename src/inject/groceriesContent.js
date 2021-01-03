console.log("checking");

const itemsArray = [];
const itemCountArray = [];
const finalArray = [];
 
    document.addEventListener("click", function(e){
        if((e.target && e.target.innerText === "Continue checkout") || (e.target && e.target.innerText === "Checkout")){
          
            getFinalArray();
            
            alert("checking");
        }
    });

    
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
            var itemName = document.getElementsByClassName("hgdSSe");
            

            for (let i = 0; i< itemName.length; i++){
                itemsArray.push(itemName[i].innerText);
            }

        }


        //it gets the quantity of items in cart in an array
        function getItemNumberArray(){
            var itemCount = document.getElementsByClassName("dGtWSg");   

            for (let i = 0; i<itemCount.length; i++){
                var numberFromString = parseInt(itemCount[i].innerText.charAt(0));
                itemCountArray.push(numberFromString);
            }

        }
        
    




