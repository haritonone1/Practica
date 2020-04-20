
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

getJson();
var shopElements;
var products;
function useJson(xhttp) {
    products = JSON.parse(xhttp.responseText);
    addElementsToShop(products,0,2)
}

function addElementsToShop(jsonDataArray,arrayStart,itemsToSpawn)
{
    var cycleLimit;
    var turnOffButton = false;
    if((itemsToSpawn + arrayStart) >= jsonDataArray.length){
        cycleLimit = jsonDataArray.length;
        turnOffButton = true;
    }
    else cycleLimit = itemsToSpawn + arrayStart;
    
    for(var i=arrayStart;i<cycleLimit;i++)
    {
        $(".mainShop").append('<div class="shopItem"></div>');
        shopElements = $(".shopItem");
        $(shopElements[i]).append('<div class="vacanceImageDiv"></div>');
        $(shopElements[i]).children(".vacanceImageDiv").append('<img class="vacanceImage">');
        $(shopElements[i]).children(".vacanceImageDiv").children(".vacanceImage").attr("src", jsonDataArray[i].PhotoURL);
        $(shopElements[i]).append('<div class="vacanceData"></div>');
        $(shopElements[i]).children(".vacanceData").append(`<p class="vacanceName">${jsonDataArray[i].Name}</p>`);
        $(shopElements[i]).children(".vacanceData").append('<div class="vacanceDetails"></div>');
        $(shopElements[i]).children(".vacanceData").children(".vacanceDetails").append('<img class="vacanceDetailIcon" src="Images/human.png">');
        $(shopElements[i]).children(".vacanceData").children(".vacanceDetails").append(`<p class="vacanceDetailData">${jsonDataArray[i].Persons}</p>`);
        $(shopElements[i]).children(".vacanceData").children(".vacanceDetails").append('<img class="vacanceDetailIcon" src="Images/moon.png">');
        $(shopElements[i]).children(".vacanceData").children(".vacanceDetails").append(`<p class="vacanceDetailData">${jsonDataArray[i].Nights}</p>`);
        $(shopElements[i]).children(".vacanceData").append(`<p class="vacancePrice">${jsonDataArray[i].Price + "$ per person"}</p>`);
        $(shopElements[i]).children(".vacanceData").append(`<button class="orderVacance"></button>`);
        $(shopElements[i]).children(".vacanceData").children(".orderVacance").append(`<p class="startTripText">Start Your Trip</p>`);
    }
    if(turnOffButton)
    {
        $("#showMoreButton").css(
            "display" , "none"
        )
    }
}

function addShopElements()
{
    addElementsToShop(products,shopElements.length,2); //onclick function
}



