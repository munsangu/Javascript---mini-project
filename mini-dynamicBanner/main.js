const banner = document.getElementById("banner");
const img = banner.getElementsByTagName("img");
const toggle = document.getElementById("toggle");
const sound_btn = document.getElementById("sound_btn");

// 배너의 높이 값 변수
let banner_height = getComputedStyle(banner).height;
let cast = [] // 풍선 객체

// 풍선 객체 생성 함수
function set_balloon(num) {
  // 풍선의 속성 값을 랜덤으로 생성
  let x = Math.floor(Math.random() * (500 - 10) + 10);
  let y = Math.floor(Math.random() * (400 - 120) + 120);
  let size = Math.floor(Math.random() * (200 - 100) + 100);
  let angle = Math.floor(Math.random() * (360 - 0) + 0);
  let speed = Math.random() * (2 - 0) + 0;

  // 풍선 객체
  cast[num] = {
    x: x,
    y: -y,
    size: size,
    angle: angle,
    speed: speed
  };
}

// 풍선 객체 초기화 함수
function ball_init() {
  for(let i = 0; i < img.length ; i++) {
    // 풍선 객체들의 속성 초기화
    set_balloon(i);
    img[i].style.left = "-9999px";
    img[i].style.top = "-9999px";
  }
}

// 풍선 애니메이션 함수
function animate_balloon() {
  for(let i = 0; i < img.length; i++) {
    // 풍선 속성 변경
    img[i].style.left = `${cast[i].x}px`;
    img[i].style.top = `${cast[i].y}px`;
    img[i].style.transform = `rotate(${cast[i].angle}deg)`;

    // 풍선이 화면 안에 있으면
    if(cast[i].y < parseInt(banner_height)) {
      cast[i].y += (1 + cast[i].speed);
      cast[i].angle += cast[i].speed;
    } else {
      set_balloon(i)
    }
  }
}

function bgm_init() {
  let bgm = new Audio();
  bgm.src = 'images/Paris.mp3';
  bgm.loop = true;
  document.body.appendChild(bgm);
}

ball_init();
setInterval(animate_balloon, 1000/30);
bgm_init();

sound_btn.onclick = function(event) {
  let attr = sound_btn.getAttribute("class");
  let bgms = document.getElementsByTagName("audio");

  if(attr == "active") {
    // 사운드 off
    sound_btn.removeAttribute("class");
    sound_btn.setAttribute("src", "./images/sound_off.png");
    bgms[0].pause();
  } else {
    // 사운드 on
    sound_btn.setAttribute('class', 'active');
    sound_btn.setAttribute('src', 'images/sound_on.png');
    bgms[0].play();
  }
  event.stopPropagation();
}

// 배너 열기/닫기 버튼 이벤트 핸들러
toggle.onclick = function () {
  let attr = banner.getAttribute("class");

  if(attr == "active") {
    // 배너 닫기
    banner.removeAttribute("class");
    toggle.innerHTML = "배너 열기";
    return false;
  } else {
    // 배너 열기
    banner.setAttribute("class", "active");
    toggle.innerHTML = "배너 닫기";
    return false;
  }
};

// 배너 링크 처리
banner.onclick = function() {
  window.open("https://www.naver.com/", "_blank");
}


