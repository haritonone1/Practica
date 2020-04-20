
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

var homepageVacances;
var products;
function useJson(xhttp) {
    products = JSON.parse(xhttp.responseText);
    addElementsToShop(products,0,3,3)
    addExtremeVacances(products,0,2);
}

function addElementsToShop(jsonDataArray,arrayStart,itemsToSpawn,maxElementsInRow)
{
    var hotOffersMenus = document.getElementsByClassName("hotOffersMenu");
    var vacancesPassed = 0;
    var cycleLimit;
    
    if((itemsToSpawn + arrayStart) > jsonDataArray.length){
        cycleLimit = jsonDataArray.length;
    }
    else cycleLimit = itemsToSpawn + arrayStart;
    
    for(var j=0;j<hotOffersMenus.length;j++)
    {   
        var hotOffersMenu = hotOffersMenus[j];
        for (var i = vacancesPassed; i < maxElementsInRow+vacancesPassed; i++) {
            $(hotOffersMenu).append('<div class="menuItem"></div>');
            homepageVacances = $(".menuItem");
            $(homepageVacances[i]).append(`<p class="hotOffersMenuItemName">${jsonDataArray[i].Name}</p>`);
            $(homepageVacances[i]).append('<div class="borderBottom"></div>');
            $(homepageVacances[i]).append('<br>');
            $(homepageVacances[i]).append('<img class="homepageVacanceImage">');
            $(homepageVacances[i]).children(".homepageVacanceImage").attr("src", jsonDataArray[i].PhotoURL);
        }
        vacancesPassed += maxElementsInRow;
    }
}

function addExtremeVacances(jsonDataArray,arrayStart,maxElementsInRow)
{
    var vacancesPassed = 0;
    var itemsToSpawn = 0;
    var extremeItems = [];

    for(var j=0;j<jsonDataArray.length;j++){
        if(jsonDataArray[j].Extreme == true){
            extremeItems[itemsToSpawn] = jsonDataArray[j];
            itemsToSpawn++;
        }
    }
    console.log(extremeItems);
    
    if(itemsToSpawn >= 2){
        $(".extremeTop").append('<div class="image40"></div>');
        imageDiv = $(".image40");
        $(imageDiv).append('<img class="extremeImage">');
        $(imageDiv).children(".extremeImage").attr("src",extremeItems[0].PhotoURL);

        $(".extremeTop").append('<div class="image50"></div>');
        imageDiv = $(".image50");
        $(imageDiv).append('<img class="extremeImage">');
        $(imageDiv).children(".extremeImage").attr("src",extremeItems[1].PhotoURL);
    }
    
    else if(itemsToSpawn == 1){

        $(".extremeTop").append('<div class="image80"></div>');
        imageDiv = $(".image80");
        $(imageDiv).append('<img class="extremeImage">');
        $(imageDiv).children(".extremeImage").attr("src",extremeItems[0].PhotoURL);
    }
    
    
    
    


    // var hotOffersMenu = hotOffersMenus[j];
    // for (var i = vacancesPassed; i < maxElementsInRow+vacancesPassed; i++) {
    //     $(hotOffersMenu).append('<div class="menuItem"></div>');
    //     homepageVacances = $(".menuItem");
    //     $(homepageVacances[i]).append(`<p class="hotOffersMenuItemName">${jsonDataArray[i].Name}</p>`);
    //     $(homepageVacances[i]).append('<div class="borderBottom"></div>');
    //     $(homepageVacances[i]).append('<br>');
    //     $(homepageVacances[i]).append('<img class="homepageVacanceImage">');
    //     $(homepageVacances[i]).children(".homepageVacanceImage").attr("src", jsonDataArray[i].PhotoURL);
    // }
}

function addShopElements()
{
    addElementsToShop(products,shopElements.length,3); //onclick function
}



