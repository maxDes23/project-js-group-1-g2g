import{S as h}from"./vendor-8a3563eb.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const A of e)if(A.type==="childList")for(const r of A.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function w(e){const A={};return e.integrity&&(A.integrity=e.integrity),e.referrerpolicy&&(A.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?A.credentials="include":e.crossorigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function a(e){if(e.ep)return;e.ep=!0;const A=w(e);fetch(e.href,A)}})();const S=document.querySelector(".switcher-block"),l=document.querySelector(".switcher");document.querySelector(".nav-list");const v=document.querySelector(".basket"),u=document.querySelector(".home"),I=document.querySelector(".basket-ico"),p=document.querySelector(".mob-basket-ico"),R=document.querySelector(".menu__body"),C=document.querySelector(".burger-menu"),m=window.location.href,U=document.querySelector(".mob-basket"),d=document.querySelector(".mob-home"),n=document.querySelector(".mob-ico");function f(t){t.includes("shop-list")?(u.classList.remove("nav-active"),d.classList.remove("nav-active"),v.classList.add("nav-active"),U.classList.add("nav-active"),I.classList.add("nav-active"),p.classList.add("nav-active")):(u.classList.add("nav-active"),d.classList.add("nav-active"))}f(m);function M(){const t=n.getAttribute("href");t=="./img/icons.svg#burger"?n.setAttribute("href","./img/icons.svg#icon-x-close"):n.setAttribute("href","./img/icons.svg#burger"),console.log(t)}function L(){f(m),M(),R.classList.toggle("menu-active")}C.addEventListener("click",L);S.addEventListener("click",b);function b(){Q()}function o(t){localStorage.setItem("theme",t),document.documentElement.className=t}function Q(){localStorage.getItem("theme")==="theme-dark"?(l.style.left=2+"px",o("theme-light")):(l.style.left=19+"px",o("theme-dark"))}localStorage.getItem("theme")==="theme-dark"?(l.style.left=19+"px",o("theme-dark")):o("theme-light");const g=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL("data:image/png;base64,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",self.location).href},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL("data:image/png;base64,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",self.location).href},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAPCAYAAADtX41qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT+SURBVHgB7Zl3iFxVFMa/0V1dS6xZCxIrKjZsYI+xFzQYewsiKCpCNCqxoOKCIooiKBgbGBUjIhbEDoqIJipBjSIqUf8QNaaoJK4xMWUn35dzb/bt5d47b2ZeIJvMBz929pY37717zrnn3Kmho3VBNdJLxpBjyKFkN7I16SEDZDGZS2aR6eQj8hlZ1uC655IDkNd77pqr1OX+bpOZ8B9ZErRtQEaQDRNz9ADdhevH9D9ZFLTV3HW7Mvei7+5J9C8nK8jGqE79ZDP3va1K96R7H4HWtNTNH4j06b4uJH1kr8R8rdPmjj3I6e6e3iG3kO8S11XfnWQT5LUAEaP6MDPhDvJG0DaSTCXbRcbXyT3kBHI00tKDXEMWFto2JU+SfRJzHiB7knGJfnmePPEyVKdJ5FayLVrXl+Qx8hRak4xqHuz53idfYdDR9Y4fhkWqZiRDOxPmMCfDjMxLBnUbzFC70KLqGcZHxo+ChdLYeHnT5TAvqDfgTQz1Xn3+IjN+Ink+0/82zPDqFXJp5lnL8gE5qaL7UcR6Hba7aMHfSozTTvC1++5pZH5mvQ4rrIGMrQ+2LYZjFySucUNhflshvQqdQR5H69vC+ihtRWNhkU85076RMX/DotCxbuwp5DjyZ2SsUo5d3WcZlI/MYYR6mjyDEmo5tFWoS2AheDyGn7QFPQiLHjn9Csv3UtL8v4I2LbCiUSx/lCHIaJSWKA0JnfIPWI6jHOogcrwjljsrUv0Es4V7yfVko0K/It4jsOh1O0pobTAq6SyY592F9vUa+SHSfiCZkJijF6ccoj/S9z3S8glwPdF/Nwarq6OQ1s/kVNj24qW1URR6EYORpCjln3qmSUHbIbCtdqrrj8318inDt+Q+mEGFNvEozKAaOc6QG5dkramtMJagboGh1hxqAHkpR+kNvvMCmFf2oD0pKZ4eaT8PaaNSFHkZFlFC7Yi0VOFOzPRroXIlu5fPgRYH7Z/DolHqvke5v6p2L4IVPgejcfWr551JXoEZzdmwvCi0AVXnW5L73f9HJq6n+bu7zxO8Uf1DtkpM0DnFS7CQKmnRr3JfFpMqlYXISw+jl30dLJRLMlIt/HJ05OXPn1LSu1Yl/hAsjYgd8cjBtXazHDMcs2G5l/plnLGgorTkCjTWaIe02qhUcZ2YmfAjLALIm/YnOyAthfCZyEu5iM5A5AnadmqFvrVlSy4jRRYdb8xJ9CuiK99Z0uA62g3kUP8W2mQg2srOycz7hkwm50f69J1KBVQpzg/6RjqkpahYfgGfg1UK3YlxstjRKCc9yC8lxiki9cFeqCJfDcNPitp6d42i6yfIn1HtRJ5Ac5rrGJe5t4sdOcngym7TimaxaKgzrtUpjzeqV2FH8dq72zmN1nnIzU2M14Pc6D5fjeEnOcL2Jcb1olqn0XtT2a9D4m60rxfIxyXGXQs7gwylY6Fn/T/eqBR2+2BbnEp7lZ+Njua9FD4VhpVQKhT3ozmpqrgJ5gFXoqOclC7IcafA8tzJqEZzkN7Ci5qdaFf1OsP/E/MebXWqePQ70s6wn2K0NR4OC6kqP/UD4u/kN1i+Nc9RlA42d0FcOumdFrSpNFcVkTsI1TYir9870a9t910M/cnBS9XJaYl58nx566JIn8p0VVbtVKV6T/ppZSyalypD5UdKtnWepMX3udcYsh/ak/LCKSXHHgHL80J9Cnu+jjpaM1oJAJhhtSWj+I4AAAAASUVORK5CYII=",self.location).href},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL("/project-js-group-1-g2g/assets/medical-c1d45058.png",self.location).href},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:new URL("/project-js-group-1-g2g/assets/msf-dc202c5b.png",self.location).href},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL("data:image/png;base64,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",self.location).href},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL("data:image/png;base64,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",self.location).href},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAnCAYAAAB39KTqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAb0SURBVHgB7VhpbFRVFD73LW2HRqKVpdCmM9OWUgg0siNqwAAGkABGMCIxgggGtAjCH8GlQCRGNC7sChSBiNCYFEwDmKD80JROWqpQsC2ls5VCtZStwCzvvet3C1NnypS2uCSW9yWvdzv3nnO/e+45d0pkwoQJEyZMmDBhwsSdYNQJwXNIomuUQJws5KN/DzJxto5qFOqEYDlk8PmoxFIS3GQQvgEgtD96MlGPoX8KnCrwd1Sn9MRoAKld4Dn94KPT0JyCbwA+qSNr4ABqQFxyWLucrad+9w2J4cB1V6gBXqnTXDRn43uwfRNpG4h7mUJh8H4mMRx8AaXCQ6eDoDfQ7B1FRMf3BwgrxbeMDFoE2Umoi1BRKUjsmDt3QrBNVA0iPoRvPormcnyX7xDiSFOcgqDzGlp+kHcVZaB5DTIRAZ6NBKTTZ2DmSRL5N2KQ3kL/+xSKpbev83/iiVlZWfF9bLYR6enpXVuO9ezZs2ksLS2tB3UAOTk5Uhtj9+QgeLKcxuWdgOr8pkQSMYhMHyUZRXTYbLY4q9XaK9pmwzFkyBC1b9++D1A7cf3y5Uyd82Nc0ya1HOtqsfQRY0YwODXcjtTU1JSMjIxuLcQZxhLTUlKG7MrNLYAdXaLp27ljx5pUm20x3SuReaSzDbSdNJqIpiNsKDmafASJwWAwHg9HBw8G8wVRok+U6Xb73KSkpIdDcg319e9oPt846jh4e4RAFDHDyA/6/ScEaaH+dBghMbaOM9YTC/W6dv58l+haeBIZRo/26msNbDOVgaHxOIq9tzooLZpcxGP73LlzF9NstgLO+ZxLdXWZ6Dp5pb5+oEG0KS4mRhi87rboZCUubi08NtYIBJ7ASVgQZX/yeDyXZsyYIR8vKhopy3JjgPNE0nXSJemKxP/az5gxYxSP0/kUybIl4Pc3yErkm//o0aO+VKt1K9xog2QYM0J6uapmQ9derFfDGFtW6XZfFPpKCwsfN2Q5PsZiKSovL7/IFCVX0rTzofVAfjLmDmWc1w0aPtyRl5enJycnJ8QpyjBSlEI9EBgtS5KkER12uVwRv3Fwva/ijfkiqXQGR7I8Gol3xhXO9+OTJEWZJZoG5/OIMQ3lTGFwutU6GJOK/X5/kh4MlkLkMY3zLgpjv9nt9imlpaUKPGUX+rbAm2bCts3YcPOvBBCf7HU6C1FdgsOCGuWZaIYFdP0bFBew1iJxvUWIgXwfJRD4UdL1bBzOfhyGXOJwHNJleRxssgV9vo1NkzVtn87Yu4IDu9X6uqEoR5iuczjD3GKH4+fevXt3g96B2NMhQ9NWQS4O75iZWKMoA2MtbWFfIDN3p/dQFZ/eJokZ/fv/gMIFBdP747RA4CB4xJc4xUeOOxwjYMhCwzB2Y+LnIEeu9nhWubzevZArAGlbJZ+vyQjMKXd6PLOhcRQ2fT20Pjx3BXxyKLzwNafTmYfruZ2ioKampgGH+RWqqdAznOv6NKxZWI7bEpLxer0JKMZiXCFVPXzW5Xo+Yi92exbmfADbcqu83v1wjRXQZ7eo6pJmgmT5EOzMU2NilkJfVlBVX4pmj/gpCSLXYGNrxDbuSuLBgwf9WHgnqvabsrwcBuSDnC1iHX7rHTUsoUePQpDaD0rP0u24g4WqUHTXGIt4sLrd7uZrxeDfWE/83LqZUl1dTW0AOnaDoOso30aMW8BlOT98fPDgwYLQ7bBjMRJTZZrVupbCkgkcwYYinhuGsFPE/KvwZuHdA1vqamxsvCSmCI9u1R5BZB2thIaPwvujPhNAWgEKH6zJBuU7qjyeCtSPoO9plHklJSVB1BEjeHLIaEMEc6LfFc5rWzMCm9FB4ilULbUZGW3+1Drr9ZbxW+FlPJrF4P1MS5mHunVbYMC7QPY+nObSzMzMhObNMeaCcY0obaKNKxyLtRIge4LuESJzIz7moPpds55oglVudymUFaP6PQJtHUodXrAH5Q0E32+FDGLOQhAiI17NhweIp4B4oiwx4uLqWzeBOBKFSBIVmt+/CfNGIXbOortOkIT8Dejb0HLM4XCk4KVwAKRkgEBBWFliYuKV0Hil0/krvG4tDuK5dJttJF7OK3HL3IphbKO/AfYJ3cT9exPV06Ld2oOVG5L0KoK3EGy6rqqqHsCGJsyZM0f8+4dAbrkSGzsaedXFhTfK8thqt/vrqqqqAOLgXLRDmVxkZ3GdJsNjjsGrT8VzLn5i7WHCkwOB9WIMGfVwNEMQN4vhSWOhryJsvY9B3LO6rl/ABlYj86eCwF+Yqk5EZtcQNl7ADfpUyFa7XKvhAK/gpuD/izxfDQSmVrjdTk3TTjbpZaxMyNXW1vpRTEGW3krtIXIjwpdK88iECRMmTJgwYcKECRMmTJgwYcLE/wR/Ak4xxMU7yXAXAAAAAElFTkSuQmCC",self.location).href},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:new URL("data:image/png;base64,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",self.location).href}];g.sort((t,c)=>t.title==="UNITED24"?1:c.title==="UNITED24"?-1:0);const K=document.querySelector(".splide__list");g.forEach(t=>{const c=`<li class="splide__slide">
    <a href="${t.url}" target="_blank" rel="noopener noreferrer">
      <img src="${t.img}" alt="${t.title}" class="org-logo">
    </a>
  </li>`;K.insertAdjacentHTML("beforeend",c)});const E=new h("#sliderOne",{perPage:6,gap:"20px",pagination:!1,direction:"ttb",height:"292px",dynamicSlides:!0,rewind:!0,label:"Support to Ukraine"});E.mount();const j=document.querySelector(".splide__arrow.splide__arrow--next"),s=document.getElementById("rotate-svg"),J=s.innerHTML;let i=!1;j.addEventListener("click",()=>{i=!i,i?s.innerHTML=`
      <svg>
          <use href="./img/icons.svg#icon-ar-down"></use>
        </svg>
    `:s.innerHTML=J});
//# sourceMappingURL=support-bc418845.js.map
