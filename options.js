window.onload = function() {
    document.getElementById('save').onclick = function(){
    var value = document.getElementById('save new name').value;
    chrome.storage.local.set({'name': value}, function(){
        alert("your name is now "+ value);
    });

    }

    document.getElementById('hourlimit').onclick = function(){
        var hourlimit = document.getElementById('save new hour limit').value; //need to make sure input is a number
        if (checkInp(hourlimit)) {
            alert("please input a number");

        } else if ((hourlimit <= 0) || (hourlimit >=24)){
            alert("please input a valid number between 1 and 23");
        }
        
        else {
        chrome.storage.local.set({'hourlimit': hourlimit}, function(){
            alert("your new time limit is now "+ chrome.storage.local.get('hourlimit') + " hours");
        });
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
    

}