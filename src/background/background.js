//to open beta evocco on install/refresh
chrome.runtime.onInstalled.addListener(function() {
    
    chrome.tabs.create({
      url: 'https://beta.evocco.com/',
      active: true
    });
  
    return false;
});

//injects content script on /trolley url which is loaded using the history API (tesco.com)
chrome.webNavigation.onHistoryStateUpdated.addListener(
  function (event) {
    chrome.tabs.executeScript(event.tabId, {
       file:"src/inject/groceriesContent.js"
       });
       
  },
  { url: 
       [  {urlMatches: 'https://www.tesco.com/groceries/en-GB/trolley'} ]
  }
);

//future use in tesco.ie
//var imgElement = document.querySelector(img[alt="MyImage"])




