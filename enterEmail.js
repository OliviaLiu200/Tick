window.onload = function() {
    
var name;
var email;
var listFriends = [];
function setName(id) {
    name = document.getElementById(id).value;
}
function setEmail(id) {
    email = document.getElementById(id).value;
}
function finalSubmit(id1, id2) {
    if (document.getElementById(id1).value == "" || document.getElementById(id2).value == "") {
        alert("Please fill in all fields.");
    }
    else {
        //name = document.getElementById(id1).value;
        //email = document.getElementById(id2).value;
        chrome.storage.sync.set({'flist': chrome.storage.sync.get(flist).push(name)}) 
        chrome.storage.sync.set({'femail': chrome.storage.sync.get(femail).push(email)})  
        //listFriends.push([name, email]);
        window.location = "friendsListYeet.html";
    }
}
}