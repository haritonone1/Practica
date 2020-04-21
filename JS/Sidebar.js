
function openNav() {
    $("#mySidenav").show();
    setTimeout(function(){$("#mySidenav").css("height",260)},1);
}

function closeNav() {
    $("#mySidenav").css("height",0);
    setTimeout(function (){$("#mySidenav").hide()},400);
}