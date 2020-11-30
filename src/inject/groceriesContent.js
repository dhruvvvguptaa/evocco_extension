console.log("checking");

 
    document.addEventListener("click", function(e){
        if((e.target && e.target.innerText === "Continue checkout") || (e.target && e.target.innerText === "Checkout")){
          
            getItemNameArray();
            getItemNumberArray();
            console.log(getItemNameArray());
            console.log(getItemNumberArray());
            alert("checking");
        }
    });

    
        function getItemNameArray(){
            var itemName = document.getElementsByClassName("hgdSSe");
            const itemsArray = [];

            for (var i = 0; i< itemName.length; i++){
                itemsArray.push(itemName[i].innerText);
            }

            return itemsArray;
        }



        function getItemNumberArray(){
            var itemCount = document.getElementsByClassName("dGtWSg");
            const itemCountArrayString = [];    

            for (var i = 0; i<itemCount.length; i++){
                var numberFromString = itemCount[i].innerText.charAt(0);
                itemCountArrayString.push(numberFromString);
            }

            const itemCountArray = itemCountArrayString.map(Number);
            return itemCountArray;
        }
        
    




