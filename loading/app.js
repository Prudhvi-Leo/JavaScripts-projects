const num = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
let count=0;
let val = setInterval(blurring,30);
function blurring(){
        count++;
        console.log(count);
        if(count>99){
            clearInterval(val);
           
        }
        num.textContent= `${count}%`;
        num.style. opacity = scale(count,100,0,0,1);
     bg.style.filter = `blur(${scale(count,0,100,30,0)}px)`;      
}
const scale = (nums,in_min,in_max,out_min,out_max)=>{
    return ((nums-in_min)*(out_max-out_min))/(in_max-in_min)+out_min;
}