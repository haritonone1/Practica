
function openItemPage(id){
    window.location.replace("item.html");
    localStorage.setItem("currentID",id);
    console.log(id);
}
