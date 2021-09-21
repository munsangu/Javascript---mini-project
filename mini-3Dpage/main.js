const wrapper = document.querySelector(".wrapper");
const page = document.querySelectorAll(".page");
const indicator = document.getElementById("indicator");
let indicator_li = indicator.querySelectorAll("li");

let yDeg = 0;
let indicator_num = 1;
let indicator_length = page.length;
let w = page[0].offsetWidth;
let page_angle = 0;
let page_vector = 0;

let hammer = new Hammer(wrapper);

// 페이지 초기화
function init_page() {
  w = page[0].offsetWidth;

  // 3D page 4면체 위치 정의
  for (let i = 0; i < page.length; i++) {
    page[i].style.transform = `rotateY(${page_angle}deg) translateZ(${
      w / 2
    }px)`;
    page_angle += 90;
  }

  // page wrapper 정면으로 초기화
  wrapper.style.transform = `translateZ(${-w / 2}px) rotateY(${yDeg}deg)`;
}

// 인디케이터 초기화
function init_indicator() {
  // 인디케이터 표시
  for (let i = 0; i < indicator_length; i++) {
    indicator.innerHTML += `<li> ${i + 1} </li>`;
  }
  indicator_li = indicator.querySelectorAll("li");
  change_page(indicator_num);
}

// 페이지 전환
function change_page(inum) {
  // 현재 인디케이터 하이라이트 표시
  indicator_li[inum - 1].setAttribute("class", "active");
  yDeg = -90 * (inum - 1);
  wrapper.style.transform = `translateZ(${-w / 2}px) rotateY(${yDeg}deg)`;
  // 인디케이터 표시
  for (let i = 0; i < indicator_li.length; i++) {
    indicator_li[i].removeAttribute("class");
  }
  indicator_li[inum - 1].setAttribute("class", "active");
}

init_page();
init_indicator();

for (let i = 0; i < indicator_li.length; i++) {
  indicator_li[i].addEventListener("click", () => {
    indicator_num = parseInt(this.innerText);
    change_page(indicator_num);
  });
}

// 터치 swipe left
hammer.on("swipeleft", function () {
  // 인디케이터(페이지) 이동 범위 내이면
  if (indicator_num < indicator_length) {
    page_vector = 1;
  } else {
    page_vector = 0;
  }

  indicator_num += page_vector;
  change_page(indicator_num);
});

// 터치 swipe right
hammer.on("swiperight", function () {
  if (indicator_num > 1) {
    page_vector = -1;
  } else {
    page_vector = 0;
  }
  indicator_num += page_vector;
  change_page(indicator_num);
});

// 창 크기 변경시 페이지 초기화
window.onresize = function () {
  init_page();
};
