const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function (){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function (){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
//init시작 함수, 초기화 함수
function init() {
  gsap.to("#to-top",.1,{x :100});
}
init()
  window.addEventListener('scroll', _.throttle(function() {
    console .log(window.scrollY);
    if (window.scrollY > 500) {
  // gsap.to (요소, 지속시간(초), 옵션);
      gsap.to(badgeEl, .6, {
        opacity: 0,
        display: 'none'
      }); //  배지 숨기기
      gsap.to('#to-top', .1, {
        x: 0
      }); // 버튼 보이기
    } else {
      gsap.to(badgeEl, .6, {  
        opacity: 1,
        display: 'block'
      }); // 배지 보이기
      gsap.to('#to-top', .1, {
        x: 100
      }); // 버튼 숨기기
    }
  }, 300));
  // _.throttle(함수,시간)
  toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
      scrollTo: 0
    });
  });

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7  
    opacity: 1
  });
});

// nev Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true, // 자동재생
  loop: true //반복재생
});
new Swiper('.promotion .swiper-container', {
  // direction: 'horiwontal' 기본값으로 표시할 필요 없음
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백 px단위
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 //1000 = 1초
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
// AWARDS
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('.click', function() {
  isHidePromotion = !isHidePromotion //!변수 = 특정 변수의 값을 지속적으로 반대의 값으로 반환해줌
  if(isHidePromotion) {
  promotionEl.classList.add('hide');
    // 숨김 처리
  }else {
    promotionEl.classList.remove('hide');
    // 보임 처리
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  //gsap.to(선택자, 애니메이션 동작 시간, {옵션});
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //무한 반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //현재 년도의 정보를 숫자로 반환해줌