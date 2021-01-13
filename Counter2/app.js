const counter = document.querySelectorAll('.counter');
counter.forEach(counters=>{
    counters.innerText = '0'
   function update(){
        const val = +counters.getAttribute('data-target')
        const div = val /200;
        const c = +counters.innerText
        if(c < val){
            counters.innerText = `${Math.ceil(c + div)}`
            setTimeout(update,1)
        }
        else{
            counter.innerText = val;
        }
     
    }
 
    update();
})