chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "updateIcon") {
        if (request.value) {
            chrome.browserAction.setIcon({path: "logo/square 16 bw.png"},null);
        } else {
            chrome.browserAction.setIcon({path: "logo/Square 16.png"},null);
        }
    }
})