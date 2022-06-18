var button=document.getElementById("button")
//console.log("Button elemenmt "+button);
var inputTxt=document.getElementById("inputtxt")
var outputDiv= document.getElementById("outputDiv")


var serverURL= "https://api.funtranslations.com/translate/minion.json"
	

function getTranslationURL(text){

    return serverURL +"?" + "text=" + text

}
function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server try again afer some time")
}

function clickHandler()
{
    //console.log("inside click handler");
    var inputtext=inputTxt.value;
    fetch(getTranslationURL(inputtext))
    .then(response=>response.json())
 
    .then(json=>{
        var translatedText = json.contents.translated;
        outputDiv.innerText=translatedText;})
    .catch(errorHandler)
};



button.addEventListener("click",clickHandler)
