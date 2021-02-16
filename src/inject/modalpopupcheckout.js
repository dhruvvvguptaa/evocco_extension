
let url1 = chrome.extension.getURL('logo/logo_letters_darkcyan.png');
let url2 = chrome.extension.getURL('icons/BrownBagSmiling.png');
let url3 = chrome.extension.getURL('icons/star_full_green.png');
let url4 = chrome.extension.getURL('icons/CO2_widget.png');
let url5 = chrome.extension.getURL('icons/TreesToOffset.png');

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
          
          <div style="background-color:#22aa97; margin-top:10px; margin-left:55px; border:none; border-radius:15px; height:26px; cursor:pointer; display:inline-block; width:120px; outline:none;"><span id="check_score_button" style="display: inline-block; vertical-align: middle; color:white; text-decoration:none; font-size:13px; font-weight:500; text-align:center;font-family:Open Sans !important; margin-left:22.5px;">Check score</span></div>
          
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
        progress.style.width = "73.918%";
        progress.style.backgroundColor = "#22aa97";
        var width=20;
        var id = setInterval(frame, 25);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
              }
            else {
              width++; 
              progress.innerHTML = width * 1  + '%';
                }
              }
              
            }
          ,100);

  
setTimeout(function() {
    
  let checkscore = document.getElementById(`check_score_button`);
              
            if (checkscore) {
              
              checkscore.addEventListener("click", () => {
              
                window.event.preventDefault();
              
                notificationMessage=document.getElementById('evocco_basketNotification');
                notificationMessage.style = "width:250px; height:290px; border-radius:15px; border:2px solid #22aa97; color:black; position:fixed; bottom:150px; right:20px; z-index:10000; background-color: white; ";
                notificationMessage.innerHTML= `
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">     
          <div style="width:54px; border-bottom:2px solid #22aa97; position:absolute; left:103px; bottom:-17px; transform:rotate(34.7deg);"></div>
          <div style="width:31px; height:47px; border-bottom:2px solid #22aa97; position:absolute; left:152.7px; bottom:-32px; transform:rotate(69.7deg);"></div>
          <div style="width:0px; height:0px; position:absolute; border-left:12px solid transparent; border-right:24px solid #fff; border-top:12px solid #fff; border-bottom:20px solid transparent; left:108px; bottom: -28px; transform:skewX(20.5deg);"></div>

          <div style="text-align:center;"><a href="https://evocco.com" target="_blank"><img id="evocco_icon" style="width:100px; margin-top:20px; margin-bottom:10px;"></a></div><span id="evocco_basketX" style="position:absolute;cursor: pointer; font-size:18px ;top:10px;right:15px;font-weight:bold; margin-left:300px;font-family: verdana !important;">×</span>
          <div style="text-align:center; font-weight:bold; font-size:14px;margin-bottom:10px; font-family:Open Sans !important; width:75% !important; margin-left:auto; margin-right:auto; line-height:1.7;">Your Basket Score</div>

          <div style="color:#22aa97; font-weight:bold; font-size:14px; margin-bottom:10px; font-family:Open Sans !important; line-height:1.7; margin:auto;"><span style="display: inline-block; vertical-align: middle;"><img id="star_icon" style="width:20px; height:20px; margin-left:30px;"></span> <span id="stars" style="margin-left:15px;">0.0</span> <span>sustainability stars</span></div>
          <hr style=" height:0.1em; width:85%; text-align:center; background-color:#22aa97; border:none; margin:auto; margin-bottom: 10px;">
          
          <div style="color:#22aa97; font-weight:bold; font-size:14px; margin-bottom:10px; font-family:Open Sans !important; line-height:1.7; margin:auto;"><span style="display: inline-block; vertical-align: middle;"><img id="co2_icon" style="width:35px; height:23px; margin-left:25px;"></span> <span id="co2" style="margin-left:5px;">0.0</span> <span>kg CO<sub style="vertical-align:bottom; font-size:12px;">2</sub> emissions</span></div>
          <hr style=" height:0.1em; width:85%; text-align:center; background-color:#22aa97; border:none; margin:auto; margin-bottom: 10px;">
          
          <div style="color:#22aa97; font-weight:bold; font-size:14px; margin-bottom:10px; font-family:Open Sans !important; line-height:1.7; margin:auto;"><span style="display: inline-block; vertical-align: middle;"><img id="tree_icon" style="width:20px; height:30px; margin-left:30px;"></span> <span id="trees" style="margin-left:15px; display: inline-block; vertical-align: top;">0.0 tree</span> <span style=" display: inline-block; vertical-align: top;">to offset</span></div>
          
          <div style="text-align:center; font-weight:bold; font-size:14px; margin-top:0px; margin-bottom:10px; font-family:Open Sans !important; line-height:1.7; ">Open the Evocco extension in your browser bar to explore your impact and offset.</div>

          <div style="text-align:center;"><a><img id="basket_face" style="width:70px; margin-top:20px; margin-bottom:10px;position:absolute;top:285px;right:15px;"</a></div>
          `;
                        
                

          notificationInsert.querySelector("#evocco_icon").setAttribute("src",url1);   
          notificationInsert.querySelector("#basket_face").setAttribute("src",url2);
          notificationInsert.querySelector("#star_icon").setAttribute("src",url3);
          notificationInsert.querySelector("#co2_icon").setAttribute("src",url4);
          notificationInsert.querySelector("#tree_icon").setAttribute("src",url5);

          chrome.storage.local.get(['co2InKg', 'foodUnit', 'star'], function(result) {
              
              if(result.co2InKg){
                  var co2 = notificationInsert.querySelector("#co2");
                  var stars = notificationInsert.querySelector("#stars");
                  var treestext= notificationInsert.querySelector("#trees");
                  co2.textContent=result.co2InKg; 
                  stars.textContent=result.star.toFixed(1); 
                      
                  //number of trees per kg
                  var co2InKg=result.co2InKg;
                  var trees=(0.3*co2InKg).toFixed(1);
                  if(trees>1)
                      treestext.textContent=trees+" trees";
                  else
                      treestext.textContent=trees+" tree"; 
                      
                  }
          });


                
          setTimeout(function() {
    
              let notificationMessage = document.getElementById(`evocco_basketX`);
                    
                  if (notificationMessage) {
                    
                      notificationMessage.addEventListener("click", () => {
                    
                      window.event.preventDefault();
                    
                      notificationMessage=document.getElementById('evocco_basketNotification');
                      notificationMessage.style.display = 'none';
                              
                      });}
                      }) 

                });}
                })       
