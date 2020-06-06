function calculateAnswer() {
    var formElements = document.getElementsByClassName ("quizForm")[0].elements;
    var total = 0;
    for (var i= 0; i < formElements.length; i++){
        if (formElements[i].type === "radio" )
        total += formElements[i].value 
    }
}