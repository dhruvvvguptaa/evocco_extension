
let url1 = chrome.extension.getURL('logo/logo_letters_darkcyan.png');
let url2 = chrome.extension.getURL('icons/BrownBagSmiling.png')
let entirePage = document.querySelectorAll("html")[0];

let notificationInsert = document.createElement("DIV");
          notificationInsert.id += `evocco_basketNotification`;
          notificationInsert.style = "width:230px; height:240px; border-radius:15px; border:2px solid #22aa97; color:black; position:fixed; bottom:150px; right:20px; z-index:10000; background-color: white; ";
          notificationInsert.innerHTML += `
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">     
          <div style="width:54px; border-bottom:2px solid #22aa97; position:absolute; left:92px; bottom:-17px; transform:rotate(34.7deg);"></div>
          <div style="width:31px; height:47px; border-bottom:2px solid #22aa97; position:absolute; left:141.5px; bottom:-32px; transform:rotate(69.7deg);"></div>
          <div style="width:0px; height:0px; position:absolute; border-left:12px solid transparent; border-right:24px solid #fff; border-top:12px solid #fff; border-bottom:20px solid transparent; left:97px; bottom: -28px; transform:skewX(20.5deg);"></div>

          <div style="text-align:center;"><a href="https://evocco.com" target="_blank"><img id="evocco_icon" style="width:100px; margin-top:20px; margin-bottom:10px;"></a></div><span id="evocco_basketX" style="position:absolute;cursor: pointer; font-size:18px ;top:10px;right:15px;font-weight:bold; margin-left:300px;font-family: verdana !important;">×</span>
          <div style="text-align:center; font-weight:bold; font-size:14px;margin-bottom:10px; font-family:Open Sans !important; width:75% !important; margin-left:auto; margin-right:auto; line-height:1.7;">Impact assessment complete!</div>
          
          <div id="progress-bar" style="height:17px; text-align:center; vertical-align:top; border-radius:15px; margin-left:30px; margin-bottom:10px; width:20%; transition:all 3s ease; color:white; font-weight:500px; font-size:13px; font-family:Open Sans !important;">20%</div> 
         
          <div style="text-align:center; font-weight:bold; font-size:14px; font-family:Open Sans !important; width:85% !important; margin-left:auto; margin-right:auto; line-height:1.7;">Open the Evocco extension to see your score and offset.</div>
          
          <div style="background-color:#22aa97; margin-top:10px; margin-left:50px; border:none; border-radius:15px; height:26px; cursor:pointer; display:inline-block; width:120px; outline:none;"><span id="check_score_button" style="display: inline-block; vertical-align: middle; color:white; text-decoration:none; font-size:13px; font-weight:500; text-align:center;font-family:Open Sans !important; margin-left:22.5px;">Check score</span></div>
          
          <div style="text-align:center;"><a><img id="basket_face" style="width:70px; margin-top:20px; margin-bottom:10px;position:absolute;top:235px;right:10px;"</a></div>`;

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

          var progress = document.getElementById("progress-bar");
          setTimeout(
            function(){
              progress.style.width = "73%";
              progress.style.backgroundColor = "#22aa97";
              var width=20;
              var id = setInterval(frame, 25);
              function frame() {
                if (width >= 100) {
                  clearInterval(id);
                } else {
                  width++; 
                  progress.innerHTML = width * 1  + '%';
                }
              }
              
            }
          ,100);

         // window.open("popup.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");