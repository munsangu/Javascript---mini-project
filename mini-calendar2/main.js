// calendar 함수
function calendar(new_year, new_month) {
  // 특정 연월을 시작일로부터 조회(year, month, date)
  let d = new Date(new_year, new_month-1, 1)
  // 월별 일 수 구하기
  let d_length = 32 - new Date(new_year, new_month - 1, 32).getDate()
  let year = d.getFullYear()
  let month = d.getMonth()
  let date = d.getDate()
  let day = d.getDay();

  // caption 영역 날짜 표시 객체
  const caption_year = document.querySelector(".year");
  const caption_month = document.querySelector(".month");

  let start_day = document.querySelectorAll("tr td");

  // 테이블 초기화
  for (let i = 0; i < start_day.length; i++) {
    start_day[i].innerHTML = "&nbsp;";
  }

  // 한 달 치 날짜를 테이블에 시작 요일부터 순서대로 표시
  for (let i = day; i < day + d_length; i++) {
    start_day[i].innerHTML = date;
    date++;
  }

  // caption 날짜 표시
  caption_year.innerHTML = year;
  caption_month.innerHTML = month + 1;
}

(function() {
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  calendar(year, month);
  prev.onclick = function() {
    calendar(year, --month);
  };
  next.onclick = function() {
    calendar(year, ++month);
  };
}) ();
