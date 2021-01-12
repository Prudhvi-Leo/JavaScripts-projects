 const tags = document.getElementById('tags')
 const textarea = document.getElementById('textarea');
textarea.focus()

textarea.addEventListener('keydown',function(e){
 
        createArray(e.target.value);
        if(e.key === 'Enter'){
            setTimeout(()=>{
                e.target.value = ''
            },10)
            randomSelect();
        }
      
})
function createArray(tag){
    const val = tag.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim());
        tags.innerHTML = '';
val.forEach(element => {
    const ele = document.createElement('span');
    ele.classList.add('tag');
    ele.innerHTML = element
    tags.append(ele);

});
      
}
function randomSelect(){
    const times = 30;
    const interval = setInterval(()=>{
                const ran = randomTag()
                highlight(ran);
                setInterval(()=>{
                        UnHighLight(ran);
                },100)
    },100)
   setInterval(()=>{
    clearInterval(interval);
   setTimeout(()=>{
        const ran= randomTag()
        highlight(ran);
     
    },100)

    },times*100)

}
function randomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}
function highlight(ran){
    ran.classList.add('highlight');
}
function UnHighLight(ran){
    ran.classList.remove('highlight')
}