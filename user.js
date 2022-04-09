window.Id=0;
window.userDetails=[
    {
        name:"Siva sankar"
    },
    {
        name:"Israel Jebaraj"
    }];
$(document).ready(()=>{
    userId=parseInt(window.prompt("Enter id"))-1;
    this.changeUserName(userId);
});
function changeUserName(userId){
    $(".home .home-content .image-content .sample-img").html(userDetails[userId].name);
    $(".home .home-content .description-content p span.name").html(userDetails[userId].name);
}
