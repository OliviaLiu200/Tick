var name; 
var email; 
function getFriends(flist){
    friendList = document.getElementByID(flist).value;
    return friendList;
}
function enterName(name){
    name = document.getElementById(name).value;
}
function enterEmail(email){
    email = document.getElementByID(email).value;
}
function remove_friend(name, email, friendList){
    if(name == "" || email == ""){
        alert("Please fill in all fields");
    }
    else if(getFriends(friendList).indexOf([name, email]) !== -1){
        name = document.getElementByID(name).value;
        email = document.getElementByID(email).value;
        friendList.splice(getFriends(friendList).indexOf([name, email]), 1);
        window.location = "friendsListYeet.html"; // not sure where this should go.
    }
    else{
        alert("This friend could not be removed as it was not found in your friends list");
    }
}
