const next = document.querySelector(".next");
const progress = document.querySelectorAll(".progress");
const container = document.querySelector(".container");
 const previous = document.querySelector(".prev");
 var count =0;
 next.addEventListener('click',function(){
     
      count++;
      
      if(count>=1&&count<3){
    progress[count].classList.add("active");
    previous.classList.remove("disabled");
    previous.classList.remove("cant");
      }  
   else if(count==3){
    progress[count].classList.add("active");
       next.classList.add("disabled")
   }
   else{
       count=3;
      next.classList.add("cant");
   }
console.log(count)
});
previous.addEventListener('click',function(){
    
    if(count==0){
        count=0;
        previous.classList.add("cant");
  previous.classList.add("disabled");
  next.classList.remove("cant");
    }  
 else if(count>0&&count<4){
     
  progress[count].classList.remove("active");
     next.classList.remove("disabled")
     count--;
 }


});