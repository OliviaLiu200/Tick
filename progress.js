let showTableBtn = document.getElementById('btnShowTable');
let clearTimesBtn = document.getElementById('btnClearTimes');
let exportPdfBtn = document.getElementById('btnExportPdf');
let showUrlCheckbox = document.getElementById('btnShowURLs');

let errorMessageElement = document.getElementById('errorMessage');
let timeTable = document.getElementById("timeTable");

clearTimesBtn.onclick = function(element){
    chrome.storage.local.set({"tabTimesObject": "{}"}, function(){
    });
}

function download(filename, text){
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

exportPdfBtn.onclick = function(element){
    let downloadUrl = "./";
    const titleText = "Tab-time-trackings-" + encodeURIComponent((new Date).toISOString());

    let content = titleText + "\r\n\r\n"
    const padding = [40, 10, 12, 35, 35];

    let rowCount = timeTable.rows.length;
    for (var x=0; x<rowCount; x++){
        let row = timeTable.rows[x];
        for (var j = 0; j < row.cells.length; j++){
            let = col = row.cells[j];
            content += col.innerText.padEnd(j >= paddings.length ? 40 : paddings[j]);
        }
        content += "\r\n";
    }
    download(titleText + ".txt", content); 
}

showTableBtn.onclick = function(element){
    chrome.storage.local.get("tabTimesObject", function(dataCont){
        console.log(dataCont);
        let dataString = dataCont["tabTimesObject"];
        if (dataString == null){
            return;
        }

        try{
            let data = JSON.parse(dataString);

            var rowCount = timeTable.rows.length;
            for (var x=rowCount-1; x>=0; x--) {
                timeTable.deleteRow(x);
            }

            let entries = [];
            for (var key in data){
                if(data.hasOwnProperty(key)){
                    entries.push(data[key]);
                }
            }

            entries.sort(function(e1, e2){
                let e1S = e1["trackedSeconds"];
                let e2S = e2["trackedSeconds"];
                if (isNaN(e1S) || isNaN(e2S)){
                    return 0;
                }
                if (e1S > e2S){
                    return 1;
                }
                return 0;
            });

//            const showAllUrls = showUrlsCheckBox.checked;
            
            entries.map(function(urlObject){
                let newRow = timeTable.insertRow(0);
                let celHostname = newRow.insertCell(0);
                let celTimeMinutes = newRow.insertCell(1);
                let celTime = newRow.insertCell(2);
                let celLastDate = newRow.insertCell(3);
                let celFirstDate = newRow.insertCell(4);
                
                let urlCellString = urlObject["url"];
//                celHostname.innerHTML = urlCellString;

//                if (showAllUrls && urlObject.hasOwnProperty("urlDetails")){
//                    let urlListNode = urlObject["urlDetails"];
//                    let urlList = document.createElement("ul");
//                    for(var j = 0; j < urlDetails.length; i++){
//                        let urlListNode = document.createElement("li");
//                        let urlListTextNode = document.createTextNode(urlDetails[j]);
//                        urlListNode.appendChild(urlListTextNode);
//                        url.appendChild(urlListNode);
//                    }

//                    celHostname.appendChild(urlList);
//                }

//                if (showAllUrls && urlObject.hasOwnProperty("urlDetails")){
//                    let urlDetails = urlObject["urlDetails"];
//                    urlCellString+= "<br/><br/>";
//                    for (var j = 0; j < urlDetails.length; j++){
//                        urlCellString += urlDetails[j];
//                        urlCellString+= "<br/>";
//                    }
//                }

                celHostname.innerHTML = urlCellString;

                let time_ = urlObject["trackedSeconds"] != null ? urlObject["trackedSeconds"] : 0;
                celTime.innerHTML = Math.round(time_);

                celTimeMinutes.innerHTML = (time_ / 60).toFixed(2);
                let date = new Date();

                if (urlObject.hasOwnProperty("lastDateVal")){
                    date.setTime(urlObject["lastDateVal"]);
                    celLastDate.innerHTML = date.toUTCString();
                }else{
                    celLastDate.innerHTML = "date not found";
                }

                if (urlObject.hasOwnProperty("startDateVal")){
                    date.setTime(urlObject["startDateVal"])
                    celFirstDate.innerHTML = date.toUTCString();
                } else {
                    celFirstDate.innerHTML = "date not found";
                }

                date.setTime(urlObject["lastDateVal"] != null ? urlObject["lastDateVal"] : 0);
            });

            let headerRow = timeTable.insertRow(0);
            headerRow.insertCell(0).innerHTML = "Url";
            headerRow.insertCell(1).innerHTML = "Minutes";
            headerRow.insertCell(2).innerHTML = "Tracked Seconds";
            headerRow.insertCell(3).innerHTML = "Last Date";
            headerRow.insertCell(4).innerHTML = "First Date";
        } catch (err) {
            const message = "loading the tabTimesObject went wrong: " + err.toString();
            console.error(message);
            errorMessageElement.innerText = message;
            errorMessageElement.innerText = dataString;
        }
    })
}