
let url1 = chrome.extension.getURL('logo/logo_letters_darkcyan.png');
let url2 = chrome.extension.getURL('icons/BrownBagSmiling.png')
let entirePage = document.querySelectorAll("html")[0];

let notificationInsert = document.createElement("DIV");
          notificationInsert.id += `evocco_basketNotification`;
          notificationInsert.style = "width:230px; height:240px; border-radius:15px; border:2px solid #22aa97; color:black; position:fixed; bottom:150px; right:20px; z-index:10000; background-color: white; ";
          notificationInsert.innerHTML += `
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">     
          <div style="width:52px; height:47px; border-bottom:2px solid #22aa97; position:absolute; left:109.9px; bottom:-22px; transform:rotate(34deg);"></div>
          <div style="width:31px; height:47px; border-bottom:2px solid #22aa97; position:absolute; left:145px; bottom:-32px; transform:rotate(69.7deg);"></div>

          <div style="width:0px; height:0px; position:absolute; border-left:12px solid transparent; border-right:24px solid #fff; border-top:12px solid #fff; border-bottom:20px solid transparent; left:100px; bottom: -28px; transform:skewX(20deg);"></div>
          <div style="text-align:center;"><a href="https://evocco.com" target="_blank"><img id="evocco_icon" style="width:100px; margin-top:20px; margin-bottom:10px;"></a></div><span id="evocco_basketX" style="position:absolute;cursor: pointer; font-size:18px ;top:10px;right:15px;font-weight:bold; margin-left:300px;font-family: verdana !important;">×</span>
          <div style="text-align:center; font-weight:bold; font-size:14px;margin-bottom:4px; font-family:Open Sans !important; width:85% !important; margin-left:auto; margin-right:auto; line-height:1.7;">Hey there! It looks like you're shopping for groceries online.</div><div style="text-align:center; font-weight:bold; font-size:14px; font-family:Open Sans !important; width:85% !important; margin-left:auto; margin-right:auto; line-height:1.7; margin-bottom:10px;">Just click the Evocco extension at checkout to see your climate impact and make your shopping climate neutral.</div>
          <div style="text-align:center;"><a><img id="basket_face" style="width:70px; margin-top:20px; margin-bottom:10px;position:absolute;top:240px;right:10px;"</a></div>`;
          
          if (document.querySelectorAll("#evocco_basketNotification").length === 0) {
            entirePage.append(notificationInsert)
          }
          notificationInsert.querySelector("#evocco_icon").setAttribute("src",url1);   
          notificationInsert.querySelector("#basket_face").setAttribute("src",url2);

          setTimeout(function() {
    
            let notificationMessage = document.getElementById(`evocco_basketX`);
    
            if (notificationMessage) {
    
              notificationMessage.addEventListener("click", () => {
    
                window.event.preventDefault();
    
              notificationMessage=document.getElementById('evocco_basketNotification');
              notificationMessage.style.display = 'none';
              
            });}
          }) 
        