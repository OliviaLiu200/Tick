const fname = document.getElementById('name');
const friendemail = document.getElementById('email');

form.addEventListener('submit', (e) => {
let messages = []

if (fname.value === '' || fname.value == null){
    messages.push('Name is required')
}

if (friendemail.value ==='' || friendemail.value == null){
    messages.push('Email is required')
}

if (messages.length > 0) {
    errorElement.innerText = messages.join (', ')
    e.preventDefault()
}
else {

   try {
   chrome.storage.local.set({'flist': chrome.storage.local.get('flist').push(fname)})
   chrome.storage.local.set({'femail': chrome.storage.local.get('femail').push(friendemail)})

   } catch {
   var emptyarray = []
   chrome.storage.local.set({'flist': emptyarray})
   chrome.storage.local.set({'femail': emptyarray})

   } finally{
   chrome.storage.local.set({'flist': chrome.storage.local.get('flist').push(fname)})
   //chrome.storage.local.set({flist: fname});
   chrome.storage.local.set({'femail': chrome.storage.local.get('femail').push(friendemail)})
   }

}
})