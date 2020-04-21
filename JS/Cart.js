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

var selectedItems;
var products;
var item;

function useJson(xhttp) {
    products = JSON.parse(xhttp.responseText);
    selectedItems = JSON.parse(localStorage.getItem("cartItems"));
    console.log(selectedItems);
    if(selectedItems == null){
        $("#buttons").hide();
    }else {
        addElementsToCart(products, selectedItems);
    }
}

function addElementsToCart(productsArray, itemsToSpawn){
    var cartSum = 0;
    
    for(var i=0; i<itemsToSpawn.length; i++) {
        $(".cart").append('<div class="cartItem"></div>');
        item = $(".cartItem");
        $(item[i]).attr("id",i);
        $(item[i]).append('<div class="imageDiv"></div>');
        $(item[i]).children(".imageDiv").append('<img class="fullScreen">')
        $(item[i]).children(".imageDiv").children(".fullScreen").attr("src", productsArray[itemsToSpawn[i]].PhotoURL);
        $(item[i]).append('<div class="dataDiv"></div>');
        // $(item[i]).children(".dataDiv").append('<p class="removeItemButton"></p>');
        // $(item[i]).children(".dataDiv").children(".removeItemButton").text("x");
        // $(item[i]).children(".dataDiv").children(".removeItemButton").click(function(){
        //     removeItemFromCart(i);
        // })
        $(item[i]).children(".dataDiv").append('<div class="width100"></div>');
        $(item[i]).children(".dataDiv").children(".width100").append('<p class="cartVacanceName"></p>');
        $(item[i]).children(".dataDiv").children(".width100").children(".cartVacanceName").text(productsArray[itemsToSpawn[i]].Name);
        $(item[i]).children(".dataDiv").append('<div class="cartVacanceDetailDiv1"></div>');
        var cartDetail1 = $(item[i]).children(".dataDiv").children(".cartVacanceDetailDiv1");
        $(cartDetail1).append('<img class="cartDetailIcon">');
        $(cartDetail1).children(".cartDetailIcon").attr("src","Images/human.png");
        $(cartDetail1).append('<p class="cartDetailNumber"></p>');
        $(cartDetail1).children(".cartDetailNumber").text(productsArray[itemsToSpawn[i]].Persons);
        
        $(item[i]).children(".dataDiv").append('<div class="cartVacanceDetailDiv2"></div>');
        var cartDetail2 = $(item[i]).children(".dataDiv").children(".cartVacanceDetailDiv2");
        $(cartDetail2).append('<img class="cartDetailIcon">');
        $(cartDetail2).children(".cartDetailIcon").attr("src","Images/moon.png");
        $(cartDetail2).append('<p class="cartDetailNumber"></p>');
        $(cartDetail2).children(".cartDetailNumber").text(productsArray[itemsToSpawn[i]].Nights);
        
        $(item[i]).children(".dataDiv").append('<div class="cartVacanceDetailDiv"></div>');
        var cartDetail3 = $(item[i]).children(".dataDiv").children(".cartVacanceDetailDiv");
        $(cartDetail3).append('<p class="cartDetailPrice"></p>');
        $(cartDetail3).children(".cartDetailPrice").text("PRICE: " + (productsArray[itemsToSpawn[i]].Price * productsArray[itemsToSpawn[i]].Persons) + "$");
        cartSum += parseInt(productsArray[itemsToSpawn[i]].Price) * parseInt(productsArray[itemsToSpawn[i]].Persons);
    }

    $(".cart").append('<div class="finalPriceDiv"></div>');
    $(".cart").children(".finalPriceDiv").append('<div class="finalPrice"></div>');
    $(".cart").children(".finalPriceDiv").children(".finalPrice").append('<p class="finalPriceText"></p>');
    $(".cart").children(".finalPriceDiv").children(".finalPrice").children(".finalPriceText").text(cartSum +"$");
    
}

function removeItemsFromCart(){
    var items = document.getElementsByClassName("cartItem");
    $(items).hide();
    $(".cart").children(".finalPriceDiv").hide();
    $("#buttons").hide();
    localStorage.clear();
}

