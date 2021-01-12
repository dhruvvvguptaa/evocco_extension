
let url = chrome.extension.getURL('logo/letters_white.png');
let entirePage = document.querySelectorAll("html")[0];

let notificationInsert = document.createElement("DIV");
          notificationInsert.id += `evocco_basketNotification`;
          notificationInsert.style = "width:320px; height:180px; border-radius:15px; color:#fff; position:fixed; bottom:15px; right:15px; z-index:10000; background-color: #22aa97; box-shadow:30px 30px 59px #8bb39d, 30px -30px 59px #bbf2d5;";
          notificationInsert.innerHTML += `
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">     
          <div style="text-align:center;"><a href="https://evocco.com" target="_blank"><img id="evocco_icon"style="width:100px;"></a></div><span id="evocco_basketX" style="position:absolute;cursor: pointer; font-size:18px ;top:5px;right:10px;font-weight:bold; margin-left:300px;font-family: verdana !important;">×</span>
          <div style="text-align:center; font-weight:bold; font-size:14px;margin-bottom:4px; font-family:Open Sans !important; width:85% !important; margin-left:auto; margin-right:auto; line-height:1.7;">Hey there, we see you're shopping for groceries online.</div><div style="text-align:center; font-weight:bold; font-size:14px; font-family:Open Sans !important; width:90% !important; margin-left:auto; margin-right:auto; line-height:1.7; margin-bottom:10px;">When you get to the checkout page we'll calculate the climate impact of your purchases and give you the chance to make them climate neutral.</div>`;
             
          if (document.querySelectorAll("#evocco_basketNotification").length === 0) {
            entirePage.append(notificationInsert)
          }
          notificationInsert.querySelector("#evocco_icon").setAttribute("src",url);   

          setTimeout(function() {
    
            let notificationMessage = document.getElementById(`evocco_basketX`);
    
            if (notificationMessage) {
    
              notificationMessage.addEventListener("click", () => {
    
                window.event.preventDefault();
    
              notificationMessage=document.getElementById('evocco_basketNotification');
              notificationMessage.style.display = 'none';
              
            });}
          }) 
        