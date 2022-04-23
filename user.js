window.Id=1;
window.userDetails=[
    {
        name:"Siva sankar",
        resumeDescription:"I've 1 year experiance in a product based company."+ 
        " Having konwledge in web development. Also I'm egar to learn  new technologies.",
    },
    {
        name:"Israel Jebaraj",
        shortName:"Israel",
        resumeDescription:"I've 1 year experiance in a product based company."+ 
        " Having konwledge in web development. Also I'm egar to learn  new technologies.",
    }];
$(document).ready(()=>{
    // Id=parseInt(window.prompt("Enter id"))-1;
    this.changeUserDetails();
});
function changeUserDetails(){
    $(".navbar .logo .logo-name").html(userDetails[Id].shortName);
    $(".home .home-content .image-content .sample-img").html(userDetails[Id].name);
    $(".home .home-content .description-content p span.name").html(userDetails[Id].name);
    $(".home .home-content .description-content p span.description-intro").html(userDetails[Id].resumeDescription);     
}
