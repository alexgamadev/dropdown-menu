(()=>{"use strict";document.querySelectorAll(".dropdown-menu").forEach((e=>{e.addEventListener("click",(({target:t})=>{t.classList.toggle("selected");const s=e.querySelector(".menu-container");s.classList.toggle("hidden"),s.classList.toggle("expanded")}))}))})();