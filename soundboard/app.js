const sounds = ['one','two','three','four'];
sounds.forEach(sound=>{
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click',()=>{
       document.getElementById(sound).onplay();
        
    })
    document.getElementById('buttons').appendChild(btn)
 
})