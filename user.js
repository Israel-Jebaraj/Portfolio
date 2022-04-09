window.userName="";
$(document).ready(()=>{
    userName=window.prompt("Enter you name");
    this.changeUserName();
});
function changeUserName(){
    $(".home .home-content .image-content .sample-img").html(userName);
    $(".home .home-content .description-content p span.name").html(userName);
}