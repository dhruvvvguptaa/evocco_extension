//to open beta evocco on install/refresh
chrome.runtime.onInstalled.addListener(function() {
    
    chrome.tabs.create({
      url: 'https://beta.evocco.com/',
      active: true
    });
  
    return false;
});
