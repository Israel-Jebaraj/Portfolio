window.Id=0;
window.userDetails=[
    {
        name:"Siva sankar",
        resumeDescription:"I've 1 year experiance at syncfusion."+ 
        " Having konwledge in web development. Also I'm egar to learn  new technologies.",
    },
    {
        name:"Israel Jebaraj",
        resumeDescription:"I've 1 year experiance at syncfusion."+ 
        " Having konwledge in web development. Also I'm egar to learn  new technologies.",
    }];
$(document).ready(()=>{
    userId=parseInt(window.prompt("Enter id"))-1;
    this.changeUserName(userId);
});
function changeUserName(userId){
    $(".home .home-content .image-content .sample-img").html(userDetails[userId].name);
    $(".home .home-content .description-content p span.name").html(userDetails[userId].name);
    $(".home .home-content .description-content p span.description-intro").html(userDetails[userId].resumeDescription);     
}
