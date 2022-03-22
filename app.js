const photo = document.querySelector('.first__content__photo')
const text = document.querySelector('.first__content__text')
const btn = document.querySelector('.btn')

btn.addEventListener('click', movePhoto)

function movePhoto() {
    console.log('click');
    if(!photo.classList.contains('movePhoto') && !text.classList.contains('moveText')){
        console.log('add');
        photo.classList.add('movePhoto')
        text.classList.add('moveText')
        setTimeout(() => photo.classList.remove('movePhoto'), 3000);
        setTimeout(() => text.classList.remove('moveText'), 3000);

    }
    //  else {
    //     console.log('del');
    //     photo.classList.remove('movePhoto')
    //     text.classList.remove('moveText')
    // }
    
}

const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const navList = document.querySelector('.list__header')
const headerList = document.querySelector('.list__header')

hamburger.addEventListener('click', toggleMenu)

function toggleMenu() {
    hamburger.classList.toggle('open')
    nav.classList.toggle('open')
    navList.classList.toggle('open')
}

headerList.addEventListener('click', closeMenu)
nav.addEventListener('click', closeMenuOther)

function closeMenu(e) {
    if (e.target.classList.contains('nav__links')) {
          hamburger.classList.remove('open')
          nav.classList.remove('open')
          navList.classList.remove('open')
    }
  }

  function closeMenuOther(e) {
      if(!e.target.classList.contains('list__header')) {
        hamburger.classList.remove('open')
        nav.classList.remove('open')
        navList.classList.remove('open')
      }
  }