$(document).ready(()=>{
    //Typing animation
    var typedIns = new Typed(".job-profile",{
        strings:["Web Designer",".NET Developer","Front end developer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    $('#homeMenu').click(function(){
        window.scrollTo(0,0);
    })
});
