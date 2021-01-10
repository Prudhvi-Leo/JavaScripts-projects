const logo= document.querySelector('.logo');
window.addEventListener('scroll',function(){
    logo.style.transform = "rotate("+window.pageYOffset+"deg)";
})