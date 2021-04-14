// Import stylesheets
import "./style.css";

const items = document.querySelectorAll('.details');

document.body.addEventListener(function (e) {
  if(e.target.nodeName !== 'P' && e.target.nodeName !== 'SUMMARY') {
    items.forEach(function (item) {
      item.removeAttribute('open');
    })
  }
  items.forEach(function (item) {
    if(item !== e.target.parentElement) {
      item.removeAttribute('open');
    }
  })
})

// js가 동작하지 않는 경우에도 컨텐츠를 볼 수 있는 details, summary가 더 좋은 방법이 될 수 있다.
