import {client, createData} from '/mongo.js';

//client = require('node-html-parser');
//createData = require('node-html-parser');
//window.onload = function() {

async function load() {
  document.getElementById('submit').onclick = function(){
    let hours = document.getElementById('hours').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    alert(hours);
  }
    await createData(client, {name: name,
                                hours: hours,
                                email: email
    });


  
}

load();
//}
  /*
    let hours;
    let name;
    let email;
    let buttonsclicked = 0;
    let sitesChosen = [];
    function setHours(id) {
      hours = document.getElementById(hours).value;
    }
    function setName(id) {
      name = document.getElementById(name).value;
    }
    function setEmail(id) {
      email = document.getElementById(email).value;
    }
    function finalSubmit(id1, id2, id3) {
      if (sitesChosen.length == 0) {
        alert("At least one unproductive site needs to be selected to be tracked.")
      }
      else if (document.getElementById(id1).value == "" || document.getElementById(id2).value == "" || document.getElementById(id3).value == "") {
        alert("One or more areas have been left blank. Please fill in all the boxes.")
      }
      else if (checkInp(hours)) {
        alert("please input a number");

    } else if ((hours <= 0) || (hours >=24)){
        alert("please input a valid number between 1 and 23");
    } else {
        //hours = document.getElementById(id1).value;
        chrome.storage.local.set({'hourlimit': hours})
        //name = document.getElementById(id2).value;
        chrome.storage.local.set({'name': name})
        //email = document.getElementById(id3).value;
        chrome.storage.local.set({'useremail': email})

        window.location = "main_popup.html";
      }
    }
    function setColor(btn) {
      if (document.getElementById(btn).value == "true") {
        if (buttonsclicked == 5) {
          alert("A maximum of 5 websites can be tracked.");
        }
        else {
          document.getElementById(btn).value = "false";
          buttonsclicked++;
          document.getElementById(btn).style.backgroundColor = '#A6A6A6';
          sitesChosen.push(btn);
        }
      }
      else {
        document.getElementById(btn).value = "true";
        buttonsclicked--;
        document.getElementById(btn).style.backgroundColor = "#FFFFFF"
        sitesChosen.splice(sitesChosen.indexOf(btn), 1);
      }
    }

    function checkInp(valueToCheck) {
    
        var regex=/^[0-9]+$/;
        if (valueToCheck.match(regex))
        {
       
        return false;
        }
        else return true;
        }
        */
