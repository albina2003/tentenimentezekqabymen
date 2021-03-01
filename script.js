document.getElementById("submit").onclick = function myfn1() {
    let result = 0;
    let name = document.getElementById("grooms_name").value;
    let price = parseFloat(document.getElementById("Starting_bid").value);
    if (name == "" || document.getElementById("Starting_bid").value == "") {
          alert("Please Fill All Required Field");
          return;
    }
    let education = parseFloat(document.getElementById("education").value);
    let networth = parseFloat(document.getElementById("networth").value);
    let skills = document.getElementsByClassName("skills");
    result+= price
    result*= education
    result*= networth
    var inputElements = document.getElementsByClassName('skills');
    for(var i=0; inputElements[i]; ++i){
          if(inputElements[i].checked){
               result += parseFloat(inputElements[i].value);
          }
    }

    var inputElements = document.getElementsByClassName('age');
        for(var i=0; inputElements[i]; ++i){
              if(inputElements[i].checked){
                   result *= parseFloat(inputElements[i].value);
              }
        }

     var inputElements = document.getElementsByClassName('reputation');
            for(var i=0; inputElements[i]; ++i){
                  if(inputElements[i].checked && i == 0){
                       result *= parseFloat(inputElements[i].value);
                  }else if(inputElements[i].checked && i == 1){
                       result *= parseFloat(inputElements[i].value);
                  }else if(inputElements[i].checked && i == 2){
                        result -= parseFloat(inputElements[i].value);
                  }
            }


    var resultString = name.toString() + " qalyn maly - " + result.toString() + " " + document.getElementById("loveletter").value;
    var div = document.getElementById('result');
    div.innerHTML = resultString
 
}
