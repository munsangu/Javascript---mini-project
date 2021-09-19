const title = document.querySelector("#title");
const list = document.querySelector("#list");
const li = list.getElementsByTagName("li");
const addBtn = document.querySelector("#add-btn");


list.addEventListener('click', activeItem);

function activeItem(event) {
  // li 클릭 시, 제목에 표시
  if(event.target.nodeName === "LI") {
    title.innerHTML = event.target.innerText;
  
  // 목록 스타일 초기화
  for(let i = 0 ; i < event.target.parentNode.children.length ; i++) {
    event.target.parentNode.children[i].removeAttribute("class");
  }
  
  // 클릭한 목록 스타일 지정
  event.target.setAttribute("class", "active");
  }
} 

addBtn.addEventListener('click', () => {
  let txt = prompt("Insert Title");
  list.innerHTML += `<li> ${txt} <button class="delBtn"> x </li>`;
})

