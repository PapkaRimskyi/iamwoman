"use strict";function _readOnlyError(e){throw new Error('"'+e+'" is read-only')}!function(){document.querySelector(".project-header");var e=document.querySelector(".menu-is-open"),t=document.querySelector(".burger-menu__link"),n=document.querySelector(".menu-is-open__button-svg-burger"),r=document.querySelector(".menu-is-open__button-close-menu");e.classList.add("menu-is-open--display-none");t.addEventListener("click",function(){e.classList.toggle("menu-is-open--display-none")});function c(){e.classList.add("menu-is-open--display-none")}n.addEventListener("click",c),r.addEventListener("click",c)}(),function(){function t(e){var t=document.querySelector(".new-collection__product-currently");e>c.length&&(u=1),e<1&&(u=c.length),window.new_product.removeActiveClass(c,i),c[u-1].classList.add("new-collection__product--active"),t.innerHTML="0"+u+"/",function(){for(var e=0;e<c.length;e++)c[e].classList.contains(i)&&(r.className="project-header",r.classList.add(l[e]))}()}function n(e){t(u+=e)}var r=document.querySelector(".project-header"),c=document.querySelectorAll(".new-collection__product"),e=document.querySelector(".collection-switch-left"),o=document.querySelector(".collection-switch-right"),i="new-collection__product--active",l=["project-header--product1","project-header--product2","project-header--product3"],u=1;e.addEventListener("click",function(e){e.preventDefault(),n(-1)}),o.addEventListener("click",function(e){e.preventDefault(),n(1)})}(),function(){function t(e,t){for(var n=0;n<e.length;n++)e[n].classList.contains(t)&&e[n].classList.remove(t)}function n(e){!function(e){e>c.length&&(_readOnlyError("sliderIndex"),o=1),e<1&&(_readOnlyError("sliderIndex"),o=c.length),t(c,"new-product__product-preview--active"),c[o-1].classList.add("new-product__product-preview--active")}(o+=(_readOnlyError("sliderIndex"),e))}var e=document.querySelector(".switch-arrow-left"),r=document.querySelector(".switch-arrow-right"),c=document.querySelectorAll(".new-product__product-preview"),o=2;e.addEventListener("click",function(e){e.preventDefault(),n(-1)}),r.addEventListener("click",function(e){e.preventDefault(),n(1)}),window.new_product={removeActiveClass:t}}();