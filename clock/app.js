const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')
const outer = document.querySelector('.outer')
const html =document.querySelector('html');
        const t= new Date()
const ampm = t.getHours() >=12 ? 'PM' : 'AM';
toggle.addEventListener('click',()=>{
    toggle.classList.toggle("active")
    outer.classList.toggle('active')
    html.classList.toggle('dark')
})
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function setTime(){
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes()
    const second = time.getSeconds()

    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes,0,59,0,360)}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(second,0,59,0,360)}deg)`
    timeEl.innerHTML = `${hoursForClock}:${minutes<10?`0${minutes}`:minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]} ,${months[month]} <span class ="circle">  ${date}</span>`
}
const scale = (num ,in_min,  in_max, out_min,out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
setInterval(setTime,1000)
