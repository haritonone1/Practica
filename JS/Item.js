var getJson = function()
{

    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            useJson(this);
        }
    };

    xhttp.open("GET", `../package.json`, true);
    xhttp.send();
}

function useJson(xhttp) {
    products = JSON.parse(xhttp.responseText);
    addVacanceData(products,localStorage.getItem("currentID"));
}
    
getJson();

function addVacanceData(jsonDataArray,itemNumber) {
   $("#Name").text(jsonDataArray[itemNumber].Name);
   $(".descriptionText").text(jsonDataArray[itemNumber].Description);
   $("#itemPhoto").removeAttr("src");
   $("#itemPhoto").attr("src",jsonDataArray[itemNumber].PhotoURL);
}



