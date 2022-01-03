window.onload = function() {
    document.getElementById('save').onclick = function(){
    var value = document.getElementById('save new name').value;
    chrome.storage.sync.set({'name': value}, function(){
        alert("your name is now "+ value);
    });


    }

}