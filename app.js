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

  console.log(`
  Score: 150 / 150
вёрстка валидная +10
Надпись "Document checking completed. No errors or warnings to show." +10
вёрстка семантическая +20
В коде страницы присутствуют семантические теги HTML5 figure, footer, header, main, nav, section, используются заголовки h1, h2, h3, h4. Заголовок h1 только один. (2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1-h6, но не больше 20 баллов).
для оформления СV используются css-стили +10
контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10
вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10
есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. +10
на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10
контакты для связи и перечень навыков оформлены в виде списка ul > li +10
CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека [highlight.js] +10
CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название +10
CV выполнено на английском языке +10
выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10
есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке +0
дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10
  `);