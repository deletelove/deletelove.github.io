(()=>{const e=document.querySelector("#site-reward");if(!e)return;const t=document.querySelector("#site-layer"),r=document.querySelector("#site-layer-title"),l=document.querySelector("#site-layer-reward");l&&e.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),t.style.display="block",r.innerHTML="打赏赞助",l.style.display="flex",window.AD_CONFIG.layer.add(()=>{r.innerHTML="",l.style.display="none"})})})();