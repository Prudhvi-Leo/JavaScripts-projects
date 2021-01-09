const btn = document.querySelector(".search");
const input = document.querySelector(".formInput")
btn.addEventListener('click',function(){
        input.classList.toggle("active");
        input.focus();
})