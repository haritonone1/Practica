
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
var sortedJSONData = [];
var products;
function useJson(xhttp) {
    products = JSON.parse(xhttp.responseText);
    sortedJSONData = products;
    unsortedJSONData = sortedJSONData;
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
        $(shopElements[i]).children(".vacanceData").children(".vacanceDetails").append(`<p class="vacanceDetailData1">${jsonDataArray[i].Persons}</p>`);
        $(shopElements[i]).children(".vacanceData").children(".vacanceDetails").append('<img class="vacanceDetailIcon" src="Images/moon.png">');
        $(shopElements[i]).children(".vacanceData").children(".vacanceDetails").append(`<p class="vacanceDetailData2">${jsonDataArray[i].Nights}</p>`);
        $(shopElements[i]).children(".vacanceData").append(`<p class="vacancePrice">${jsonDataArray[i].Price + "$ per person"}</p>`);
        $(shopElements[i]).children(".vacanceData").append(`<button class="orderVacance"></button>`);
        $(shopElements[i]).children(".vacanceData").children(".orderVacance").append(`<p class="startTripText">Start Your Trip</p>`);

        $(shopElements[i]).children(".vacanceImageDiv").children(".vacanceImage").attr("id",jsonDataArray[i].ID);
        let index = $(shopElements[i]).children(".vacanceImageDiv").children(".vacanceImage").attr("id");
        $(shopElements[i]).children(".vacanceImageDiv").children(".vacanceImage").click(function(){
            openItemPage(index);
        });
    }
    if(turnOffButton)
    {
        $("#showMoreButton").css(
            "display" , "none"
        )
    }
}
var sortState = 0;

function changeObjectData(){
    if(sortState == 0){
        multiplier = 1;
    }
    else if(sortState == 1){
        multiplier = -1;
    }
    else {}
    sortData(multiplier);
    let shopItems = document.getElementsByClassName("shopItem");
    for(let i=0;i<shopItems.length;i++){
        $(shopItems[i]).children(".vacanceImageDiv").children(".vacanceImage").attr("src",sortedJSONData[i].PhotoURL);
        $(shopItems[i]).children(".vacanceData").children(".vacanceName").text(sortedJSONData[i].Name);
        $(shopItems[i]).children(".vacanceData").children(".vacanceDetails").children(".vacanceDetailData1").text(sortedJSONData[i].Persons);
        $(shopItems[i]).children(".vacanceData").children(".vacanceDetails").children(".vacanceDetailData2").text(sortedJSONData[i].Nights);
        $(shopElements[i]).children(".vacanceData").children(".vacancePrice").text(sortedJSONData[i].Price + "$ per person");
        $(shopElements[i]).children(".vacanceImageDiv").children(".vacanceImage").removeAttr("id");
        $(shopElements[i]).children(".vacanceImageDiv").children(".vacanceImage").attr("id",sortedJSONData[i].ID);
        let index = $(shopElements[i]).children(".vacanceImageDiv").children(".vacanceImage").attr("id");
        $(shopElements[i]).children(".vacanceImageDiv").children(".vacanceImage").click(function(){
            openItemPage(index);
        });
    }
    sortState++;
    // if(sortState > 2){
    //     for(let i=0;i<shopItems.length;i++) {
    //         $(shopItems[i]).children(".vacanceImageDiv").children(".vacanceImage").attr("src", unsortedJSONData[i].PhotoURL);
    //         $(shopItems[i]).children(".vacanceData").children(".vacanceName").text(unsortedJSONData[i].Name);
    //         $(shopItems[i]).children(".vacanceData").children(".vacanceDetails").children(".vacanceDetailData1").text(unsortedJSONData[i].Persons);
    //         $(shopItems[i]).children(".vacanceData").children(".vacanceDetails").children(".vacanceDetailData2").text(unsortedJSONData[i].Nights);
    //         $(shopElements[i]).children(".vacanceData").children(".vacancePrice").text(unsortedJSONData[i].Price + "$ per person");
    //     }
    //     sortState=0;
    // }
    if(sortState>1){
        sortState =0;
    }

}



function sortData(multiplier){
    sortedJSONData.sort(function (a,b) {
        if(a.Price > b.Price)
            return 1 * multiplier;
        
        if(a.Price < b.Price){
            return -1 * multiplier;
        }
        
        if(a.Price == b.Price){
            return 0;
        }
    })
    
}

function addShopElements()
{
    addElementsToShop(products,shopElements.length,2); //onclick function
}



