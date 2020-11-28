var continueToPayment = document.querySelectorAll(".button-with-feedback");

for (var i = 0; i< continueToPayment.length; i++){
    continueToPayment[i].firstChild.onclick = function() {
        var itemName = document.getElementsByClassName("hgdSSe");
        const itemsArray = [];

        for (var i = 0; i< itemName.length; i++){
            itemsArray.push(itemName[i].innerText);
        }

        console.log(itemsArray);



        var itemCount = document.getElementsByClassName("dGtWSg");
        const itemCountArrayString = [];    

        for (var i = 0; i<itemCount.length; i++){
            var numberFromString = itemCount[i].innerText.charAt(0);
            itemCountArrayString.push(numberFromString);
        }

        const itemCountArray = itemCountArrayString.map(Number);
        console.log(itemCountArray);

        alert("checking");
    }
}





