const btn=document.querySelector('.nabbtnt');
const nav=document.querySelector('.nav');
const video_switch=document.querySelector('.video_switch_container');
const btn_video=document.querySelector('.video_switch-btn');
const tab=document.querySelectorAll('.item');
const modal_img=document.querySelector('.modal_img')
const btnclose=document.querySelector('.fa-window-close');
const modal=document.querySelector('.modal');

//console.log(tab);

tab.forEach(val=>{
    val.addEventListener('click',(e)=>{
      e.preventDefault();
        console.log(e.target.parentElement);

     if(e.target.parentElement.classList.contains('work-item_icon')){
            let id=e.target.parentElement.dataset.id;
           // console.log(id);
           modal.classList.add('modal-show');
           btnclose.style.display="block";
           modal_img.style.backgroundImage=`url("./medias/${id}.jpeg")`;
           
           
         }


    })
})

btnclose.addEventListener('click',()=>{
    modal.classList.remove('modal-show');

})


window.addEventListener('load',()=>
 
setTimeout(()=>{
   document.querySelector('.preloader').style.display="none";
  

},50) )


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




 

