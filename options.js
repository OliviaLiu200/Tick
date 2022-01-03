'use strict';

let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let vutton = document.createElement(`button`);
        button.addEventListener(`click`, function() {
            chrome.storage.sync.set({color: item}, function() {
                console.log(`color is ` + item);
            });
        });
        page.appendChild(button);
    }
}
constructOptions(kButtonColors);