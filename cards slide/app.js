const panels = document.querySelectorAll('.panel');
panels.forEach((panel)=>{
    panel.addEventListener('click',function(){
        unactive();
        panel.classList.add('active');
    })
})
function unactive(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}