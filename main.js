$(document).ready(() => $('.banner_social_icons').click(false));
const btn = document.querySelector('.nabbtnt');
const nav = document.querySelector('.nav');
const video_switch = document.querySelector('.video_switch_container');
const btn_video = document.querySelector('.video_switch-btn');
const tab = document.querySelectorAll('.item');
const modal_img = document.querySelector('.modal_img')
const btnclose = document.querySelector('.fa-window-close');
const modal = document.querySelector('.modal');

//console.log(tab);

tab.forEach(val => {
  val.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.parentElement);

    if (e.target.parentElement.classList.contains('work-item_icon')) {
      let id = e.target.parentElement.dataset.id;
      // console.log(id);
      modal.classList.add('modal-show');
      btnclose.style.display = "block";
      modal_img.style.backgroundImage = `url("./medias/${id}.jpeg")`;


    }


  })
})

btnclose.addEventListener('click', () => {
  modal.classList.remove('modal-show');

})


window.addEventListener('load', () =>

  setTimeout(() => {
    document.querySelector('.preloader').style.display = "none";


  }, 2000))


btn.addEventListener('click', () => {

  nav.classList.toggle('hide-nav');

})



video_switch.addEventListener('click', () => {

  if (!btn_video.classList.contains('btn_slide')) {

    btn_video.classList.add('btn_slide');
    document.querySelector('.video_item').pause();
  } else {
    btn_video.classList.remove('btn_slide');
    document.querySelector('.video_item').play();

  }
})


function Customer(fname, lname, email) {
  this.fname = fname,
    this.lname = lname,
    this.email = email
}

function addt(person) {

  console.log(person)
  const images = [1, 2, 3, 4, 5]
  let random = Math.floor(random() * images.length);
  const div = document.createElement('div');
  div.classList.add('person');
  div.innerHTML = `<img src="./medias/free${random}.jpg" height="50px" width="50px" h alt="" class="person">
    <h4 class="person-fname">${person.fname}</h4>
    <h4 class="person-lname">${person.lname}</h4>`

  document.querySelector('.card-list').appendChild(div);

}


const form = document.querySelector('.drink-form');
form.addEventListener('submit', (e) => {
  const fname = document.querySelector('.fname').value;
  const lname = document.querySelector('.lname').value;
  const email = document.querySelector('.email').value;

  if (check(fname, lname, email)) {
    let customer = new Customer(fname, lname, email);
    // addt(customer);
    feedback('Customer succefully added', 'success')
  } else {
    feedback('Some or all fields are empty', 'error')
  }




  e.preventDefault();

})







const check = (f, l, e) => {
  let result;
  if (f === '' || l === '' || e === '')
    result = false;
  else result = true

  return result;
}

feedback = (text, type) => {
  if (type === 'success') {

    let feedback = document.querySelector('.drink-feedback')
    feedback.classList.add('success');
    feedback.innerHTML = text;
    removealert('success');


  } else if (type === 'error') {
    let feedback = document.querySelector('.drink-feedback')
    feedback.classList.add('error');
    feedback.innerHTML = text;
    removealert('error')
  }
}

const removealert = (value) => {

  setTimeout(() => {
    document.querySelector('.drink-feedback').classList.remove(value);

  }, 1000)
}






//window.sr = ScrollReveal();

sr.reveal('.banner_title', {
  duration: 2000,
  origin: 'top',
  distance: '300px'

});

sr.reveal('#first', {
  duration: 2000,
  origin: 'left',
  distance: '300px'

});

sr.reveal('#second', {
  duration: 2000,
  origin: 'right',
  distance: '300px'

});

sr.reveal('.banner_social_icons', {
  duration: 2000,
  origin: 'left',
  distance: '300px'

});

sr.reveal('#fon2', {
  duration: 2000,
  origin: 'left',
  distance: '300px'

});
sr.reveal('#fon3', {
  duration: 2000,
  origin: 'left',
  distance: '300px'

});
sr.reveal('#fon4', {
  duration: 2000,
  origin: 'left',
  distance: '300px'

});