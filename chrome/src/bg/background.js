// if you checked "fancy-settings" in extensionizr.com, uncomment this laines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request);
  	console.log(sender);
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

// 	console.log("on Updated: "+tabId);

// 	chrome.pageAction.show(tabId);

// });