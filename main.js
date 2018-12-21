const btn=document.querySelector('.nabbtnt');
const nav=document.querySelector('.nav');
const video_switch=document.querySelector('.video_switch_container');
const btn_video=document.querySelector('.video_switch-btn')

window.addEventListener('load',()=>
 
setTimeout(()=>{
   document.querySelector('.preloader').style.display="none";
  

},2000) )


btn.addEventListener('click',()=>{
 
    nav.classList.toggle('hide-nav');
   
})



video_switch.addEventListener('click',()=>{

    if(!btn_video.classList.contains('btn_slide')){

        btn_video.classList.add('btn_slide');
        document.querySelector('.video_item').pause();
    }
    else{
        btn_video.classList.remove('btn_slide');
        document.querySelector('.video_item').play();
   
    }
})




 

