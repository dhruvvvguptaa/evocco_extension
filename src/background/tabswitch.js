chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "tabswitch") {
        if (request.value) {
            
            chrome.browserAction.setPopup(
                {
                    tabId: sender.tab.id,
                    popup: 'src/popup/tab_switch_popup/tspopup.html'

                });
        }
        
        else{
            chrome.browserAction.setPopup(
                {
                    tabId: sender.tab.id,
                    popup: 'src/popup/popup.html'
                
                });
        }
    }
});