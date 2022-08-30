var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

/*console.log(txtInput)

function clickHandler(){
    console.log("clicked!");
    console.log("input", txtInput.value)
};
*/

function clickHandler(){
    outputDiv.innerText = "Translated " + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)