import './style.css';

const wrapper = document.querySelectorAll('.wrapper');
const items = document.querySelectorAll('.item');

wrapper.addEventListener('click', function(e) {
  const targetElem = e.target;
  e.stopPropagation();
  if(targetElem.classList.contains('open')) return;
  targetElem.classList.toggle('open');
  items.forEach(function (elem) {
    if(elem !== targetElem) elem.classList.remove('open');
  })
})

document.body.addEventListener('click', function (e) {
  if(e.target.classList.contains('context')) return;
  items.forEach(function (elem) {
    elem.classList.remove('open');
  })
})

// js 이벤트 전파
// 버블링: 타겟 엘리먼트에서 최상위 엘리먼트까지 이벤트가 전파되는 단계. (default)
// 캡처링: 최상위 엘리먼트에서 이벤트가 발생한 엘리먼트까지 이벤트가 전파되는 단계.

// e.stopPropagation vs e.preventDefault
// e.stopPropagation: 이벤트 캡쳐링과 버블링에 있어 현재 이벤트 이후의 전파를 막습니다.
// e.preventDefault: 이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지 않고 그 이벤트를 취소합니다.
