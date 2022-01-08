window.onload = function() {

form.addEventListener('submit', (e) => {
var fname = document.getElementById('name');
var friendemail = document.getElementById('email');

//chrome.storage.local.set({'storedinfname': fname})

 chrome.storage.local.get(['flist', 'femail'], function(result){
     let storedfriendlist = result['flist']
     let storedfriendemail = result['femail']

 storedfriendlist.push(fname)
 storedfriendemail.push(friendemail)

    chrome.storage.local.set({'flist': storedfriendlist})
    chrome.storage.local.set({'femail': storedfriendemail})
        
    window.location = 'friendsListYeet.html'
    });
    
  

})

}