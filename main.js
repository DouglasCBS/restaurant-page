(()=>{"use strict";!function(){const t=document.querySelector("#content"),e=document.createElement("header"),n=document.createElement("section"),a=document.createElement("footer"),o=document.createElement("div");o.classList.add("main"),e.textContent="Spastalleto",o.textContent="What do you call something that tastes like pasta, looks like pasta but isn’t pasta? An impasta.",a.innerHTML='<p>Background image by <a href="https://pixabay.com/users/pfüderi-199315/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2364221">Pfüderi</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2364221">Pixabay</a><p>',t.appendChild(e),t.appendChild(n),t.appendChild(a),n.appendChild(o);const c=document.createElement("button");c.setAttribute("id","home");const i=document.createElement("button");i.setAttribute("id","menu");const u=document.createElement("button");u.setAttribute("id","contact"),c.textContent="Home",i.textContent="Menu",u.textContent="Contact";const d=document.createElement("nav");e.appendChild(d),d.appendChild(c),d.appendChild(i),d.appendChild(u)}(),document.querySelectorAll("button").forEach((t=>t.addEventListener("click",(()=>{document.querySelectorAll("button").forEach((t=>t.removeAttribute("disabled"))),t.setAttribute("disabled","")})))),document.querySelector("#contact")})();