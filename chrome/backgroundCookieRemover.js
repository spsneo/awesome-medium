chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.cookies.getAll({}, function (cookies) {
    for (var i = 0; i < cookies.length; i++) {
      chrome.cookies.remove({
        url: "https://medium.com/" + cookies[i].path,
        name: cookies[i].name,
      });
    }
  });
  chrome.tabs.reload();
});
