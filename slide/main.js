const slideWrapper = document.querySelectorAll('.container')
const sliderContainer = document.querySelectorAll('#slider');
const slides = document.querySelectorAll(".slide");
let slideCnt = slides.length;
let currentIndex = 0;
let topHeight = 0;
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

// 슬라이드의 높이 확인하여 부모의 높이로 지정하기
function height() {
  for(let i=0; i<slideCnt; i++) {
    if(slides[i].offsetHeight > topHeight) { 
      topHeight = slides[i].offsetHeight;
    } 
  }
  slideWrapper[0].style.height = topHeight + 'px';
  sliderContainer[0].style.height = topHeight + 'px';
}
height();

// 슬라이드가 있으면 가로로 배열하기
  for(let i=0; i<slideCnt; i++) {
    slides[i].style.left =  i * 100 + '%';
  }

// 슬라이드 이동 함수
function goToSlide(idx) {
  sliderContainer[0].style.left = idx * -100 + '%';
  currentIndex = idx;
  // updateNav();
}

// 버튼기능 업데이트 함수
function updateNav(){
  if(currentIndex == 0) {
    prev.classList.add('disabled')
  } else{
    prev.classList.remove('disabled')
  }
  if(currentIndex == slideCnt -1) {
    next.classList.add('disabled')
  } else{
    next.classList.remove('disabled')
  }
}

// 버튼을 클릭하면 슬라이드 이동시키기
prev.addEventListener('click',function(e){
  e.preventDefault();
  if(currentIndex > 0){   // 처음이 아닐때
    goToSlide(currentIndex - 1); 
  } else {  // 처음인데 이전버튼 누르면 마지막으로
    goToSlide(slideCnt -1)
  }
});
next.addEventListener('click',function(e){
  e.preventDefault();
  if(currentIndex < slideCnt -1){   
    goToSlide(currentIndex + 1);  // 마지막이 아닐때
  } else {  // 마지막인데 다음버튼 누르면 처음으로
    goToSlide(0)
  }
})

// 첫번째 슬라이드 먼저 보이도록 하기
goToSlide(0)