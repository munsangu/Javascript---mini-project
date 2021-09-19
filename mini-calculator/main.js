const inp = document.forms["cal"];
const input = inp.getElementsByTagName("input");
const cls_btn = document.getElementsByClassName("cls_btn")[0];
const result_btn = document.getElementsByClassName("result_btn");

// 계산기 초기화
function clear() {
  inp["result"].value = "";
}

// 계산기 입력 처리 함수
function calculate(value) {
  // 값이 입력될 경우 0 제거
  if(inp["result"].value == 0) {
    inp["result"].value = "";
  }

  // 입력 받은 값을 결과창에 출력
  inp["result"].value += value;
}

// 계산 결과 처리 함수
function my_result() {
  let result = document.forms["cal"]["result"];
  let calc = eval(result.value); // eval() -> 입력값을 코드로 인식하게 하는 함수
  
  // 결과창에 표시
  inp["result"].value = calc;
}

// 숫자 및 사칙연산 버튼
for(let i = 0 ; i < input.length ; i++) {
  // 숫자와 사직 연산자만 입력 처리
  if(input[i].value != "=" && input[i].value != "clear") {
    input[i].onclick = function() {
      calculate(this.value);
    }
  }
}

// 초기화 버튼
cls_btn.onclick = function() {
  clear();
}

// 결과 버튼
result_btn.onclick = function() {
  try{
    my_result();
  } 
  catch(err) {
    let result = inp["result"];
    result.value = "입력 오류";
  }
}
