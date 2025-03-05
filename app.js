let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
}
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 6500);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + 'px';
  // 
  let last_active_dot = document.querySelector('.slider .dots li.active');
  last_active_dot.classList.remove('active');
  dots[active].classList.add('active');

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => { next.click() }, 7500);


}

dots.forEach((li, key) => {
  li.addEventListener('click', () => {
    active = key;
    reloadSlider();
  })
})
window.onresize = function (event) {
  reloadSlider();
};





// nav

(function () {
  "use strict";

  /***
Easy selector helper function
   ***/
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  /***
Easy on scroll event listener 
   ***/
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }
  /***
Toggle .header-scrolled class to #header when page is scrolled
  ***/
  let selectHeader = select('#navbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('scrolled')
      } else {
        selectHeader.classList.remove('scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }
  new PureCounter();
})()




// basic paging logic to demo the buttons
var pr = document.querySelector( '.paginate.left' );
var pl = document.querySelector( '.paginate.right' );

pr.onclick = slide.bind( this, -1 );
pl.onclick = slide.bind( this, 1 );

var index = 0, total = 6;

function slide(offset) {
  index = Math.min( Math.max( index + offset, 0 ), total - 1 );
  pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
  pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
}

slide(0);



// vertical slider for website

// const sections = document.querySelectorAll("section");
// const navItems = document.querySelectorAll(".navigation .list");

// window.addEventListener("scroll", () => {
//   let current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;

//     if (window.scrollY >= sectionTop - sectionHeight / 4) {
//       current = section.getAttribute("id");
//     }
//   });

//   navItems.forEach((item) => {
//     item.classList.remove("active");
//     if (item.querySelector("a").getAttribute("href").substring(1) === current) {
//       item.classList.add("active");
//     }
//   });
// });