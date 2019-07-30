document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.query({currentWindow: true}, function(tabs){
        var urls = []
        for (var i = 0; i< tabs.length; i++){
            urls.push(tabs[i].url);
        } 
        window.alert(urls.join("\n~~~\n"));
    });
  }, false);
}, false);
