$(function () {

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.shop__filter-btn').on('click', function () {
    $('.shop__filters').slideToggle();
  });

  $('.footer-top__title').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('active');
  });

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g><path d="M 1.164062 6.382812 C 0.8125 6.722656 0.8125 7.277344 1.164062 7.621094 L 5.664062 11.996094 C 6.015625 12.335938 6.585938 12.335938 6.9375 11.996094 C 7.289062 11.652344 7.289062 11.097656 6.9375 10.757812 L 3.074219 7 L 6.9375 3.242188 C 7.289062 2.902344 7.289062 2.347656 6.9375 2.003906 C 6.585938 1.664062 6.011719 1.664062 5.660156 2.003906 L 1.160156 6.378906 Z M 1.164062 6.382812 "/></g></svg></button>',

    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g><path d="M 7.835938 6.382812 C 8.1875 6.722656 8.1875 7.277344 7.835938 7.621094 L 3.335938 11.996094 C 2.984375 12.335938 2.414062 12.335938 2.0625 11.996094 C 1.710938 11.652344 1.710938 11.097656 2.0625 10.757812 L 5.925781 7 L 2.0625 3.242188 C 1.710938 2.902344 1.710938 2.347656 2.0625 2.003906 C 2.414062 1.664062 2.988281 1.664062 3.339844 2.003906 L 7.839844 6.378906 Z M 7.835938 6.382812 "/></g></svg></button>',
    infinite: false,
  });

  $('.product-tabs__top-item').on('click',function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1051,
        setting: {
          draggable: true,
        }
      },
    ]
  });

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active')
  });

  $('.button-list').on('click', function(){
    $('.product-item').addClass('product-item--list')
    $('.shop-content__inner').addClass('shop-content__nogrid')
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list')
    $('.shop-content__inner').removeClass('shop-content__nogrid')
  });

  $('.select-style, .product-one__item-num').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 18 18" version="1.1"><g id="surface1"><path d="M 16.933594 6.101562 L 12 6.03125 L 10.035156 0.972656 C 9.65625 0.0390625 8.335938 0.0390625 7.957031 0.972656 L 5.992188 6.03125 L 1.058594 6.101562 C 0.0390625 6.164062 -0.378906 7.445312 0.414062 8.089844 L 4.414062 11.5625 L 3.050781 16.300781 C 2.785156 17.273438 3.839844 18.074219 4.707031 17.558594 L 8.996094 15.210938 L 13.289062 17.558594 C 14.15625 18.074219 15.210938 17.269531 14.941406 16.296875 L 13.578125 11.558594 L 17.578125 8.089844 C 18.371094 7.445312 17.957031 6.160156 16.933594 6.101562 Z M 16.933594 6.101562 " /> </g> </svg>'
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo-clock');
    const daysSpan = clock.querySelector('.promo-days');
    const hoursSpan = clock.querySelector('.promo-hours');
    const minutesSpan = clock.querySelector('.promo-minutes');
    const secondsSpan = clock.querySelector('.promo-seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.promo-clock').attr('data-time');
  initializeClock('promo-clock', deadline);

});

function readyFn() {
  moduleArr = window.location.pathname.split('/');
  moduleName = (moduleArr[moduleArr.length - 1]).replace(".html", "").toUpperCase();
  
  console.log(moduleName);
  // ulElement = document.getElementById('menu__list');
  // console.log(ulElement);


  $("#menu__list li").each(function () {
    var self_li = $(this);
    var el_a = self_li[0].firstElementChild;

    el_a.classList.remove("menu__list-link--active");

    console.log(self_li.text());
    
    if (moduleName === "INDEX" && self_li.text().indexOf("HOME") != -1){
      el_a.classList.add("menu__list-link--active");
    }
    if (moduleName === "PRODUCT" && self_li.text().indexOf("PAGE") != -1) {
      el_a.classList.add("menu__list-link--active");
    }

    else if(self_li.text().indexOf(moduleName) != -1){ 
      el_a.classList.add("menu__list-link--active");  
    }

  });
}

document.addEventListener("DOMContentLoaded", readyFn);