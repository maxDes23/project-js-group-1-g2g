import"./assets/shopping-list-3dca7c06.js";import"./assets/vendor-8a3563eb.js";async function a(){const e=document.querySelector(".modal");e.style.display="flex";const o=e.querySelector(".gallery");await Promise.all(creatorPhotos.map(async t=>{const n=document.createElement("img");n.src=await l(t),o.appendChild(n)}))}async function l(e){return new Promise(o=>{const t=new Image;t.onload=()=>o(e),t.src=e})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("showGalleryButton").addEventListener("click",a)});
//# sourceMappingURL=commonHelpers2.js.map
