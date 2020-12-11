var convertButton=document.querySelector("#translate-btn");
var textToConvert=document.querySelector("#input-txt");
var outputText=document.querySelector("#output-text");

convertButton.addEventListener('click', clickHandler)

function errorMessage(error){
    console.log(error)
    alert("Not working!, something must be faulty.")
}

function clickHandler()
{
    var loadUrl="https://api.funtranslations.com/translate/doge.json"+"?"+"text="+textToConvert.value;
    fetch(loadUrl)
    .then(response => response.json())
    .then( json => {
        var translatedText=json.contents.translated;
        outputText.innerText=translatedText;
    })
    .catch(errorMessage)
};