(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".burger-btn"),r=document.querySelector(".burger-button-close"),s=document.querySelector(".burger-menu"),o=document.querySelector(".overlay"),e=document.querySelectorAll(".burger-menu-list-item");n.addEventListener("click",function(){s.classList.remove("is-closing"),s.classList.add("is-open"),o.classList.add("is-open")}),r.addEventListener("click",function(){s.classList.remove("is-open"),s.classList.add("is-closing"),o.classList.remove("is-open")}),o.addEventListener("click",function(){s.classList.remove("is-open"),s.classList.add("is-closing"),o.classList.remove("is-open")}),e.forEach(function(t){t.addEventListener("click",function(){s.classList.remove("is-open"),s.classList.add("is-closing"),o.classList.remove("is-open")})})});new Swiper(".swiper",{slidesPerView:1,spaceBetween:24,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2},1280:{enabled:!1,slidesPerView:3}}});
//# sourceMappingURL=index.js.map
