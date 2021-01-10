const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll',checkBoxes);
function checkBoxes(){
    const wind = window.innerHeight;  
    boxes.forEach((box)=>{
    const boxtop = box.getBoundingClientRect().top;   
        if(boxtop < wind){
            box.classList.add('show')
        }  
        else
        box.classList.remove('show');
    })
}
