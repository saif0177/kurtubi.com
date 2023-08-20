(function() {
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