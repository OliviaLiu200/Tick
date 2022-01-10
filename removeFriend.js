function removefriend(nameOrEmail) {

    chrome.storage.local.get(['flist', 'femail'], function(result){
        let storedfriendlist = result['flist']
        let storedfriendemail = result['femail']

       
        

    console.log(storedfriendlist);
    console.log(storedfriendemail);

    var index = storedfriendlist.indexOf(nameOrEmail);
    if (index < 0) index = storedfriendemail.indexOf(nameOrEmail)

    if (index > -1) {
          storedfriendlist.splice(index, 1);
          storedfriendemail.splice(index, 1);
        }


    })

}

module.exports = {removefriend}