(()=>{const e=document.querySelector("#site-search"),t=document.querySelector(".site-layer-input-choose > a"),n=document.querySelector("#site-nav"),l=document.querySelector("#site-nav-btn"),i=document.querySelector("#site-layer"),o=i.querySelector(".site-layer-content"),r=document.querySelector("#site-layer-title"),s=document.querySelector("#site-layer-search"),c=s.querySelector("input"),a=s.querySelector("i");let d=0,y=["Google","BaiDu","Bing"];function u(e){e=`site:${window.location.hostname} ${decodeURIComponent(e)}`;let t=null;switch(y[d]){case"BaiDu":t=`https://www.baidu.com/s?wd=${e}`;break;case"Bing":t=`https://cn.bing.com/search?q=${e}&FORM=BESBTB&ensearch=1`;break;default:t=`https://www.google.com/search?q=${e}`}window.open(t)}e.addEventListener("click",e=>{i.style.display="block",s.style.display="flex",c.focus(),r.innerHTML="搜索",window.AD_CONFIG.layer.add(()=>{r.innerHTML="",c.blur(),s.style.display="none"})}),t.addEventListener("click",e=>{d=(d+1)%y.length,t.innerHTML=y[d]+""}),c.addEventListener("keypress",e=>{let t=e.which||e.keyCode,n=c.value.trim();13===t&&n.length>0&&u(n)}),a.addEventListener("click",e=>{c.focus();let t=c.value.trim();t.length>0&&u(t)}),l.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),i.style.display="block",o.style.display="none",n.style.right="0",window.AD_CONFIG.layer.add(()=>{n.style.right="",i.style.display="none",o.style.display=""})})})();