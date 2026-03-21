import{r as e,t}from"./api-1J5r5zns.js";e();var n=document.getElementById(`search-input`),r=document.getElementById(`level-filter`);function i(){localStorage.setItem(`searchInput`,n.value)}function a(){let e=localStorage.getItem(`searchInput`);e!==null&&(n.value=e)}function o(){localStorage.setItem(`levelFilter`,r.value)}function s(){r.value=localStorage.getItem(`levelFilter`)||`all`}var c=class{constructor(e){this.data=e}get level(){return this.data.level===0?`Cantrip`:`level `+this.data.level}};function l(e){let t=document.getElementById(`spell-page-content`);if(!t){console.log(`spell-page- element not found`);return}if(e.length===0){t.innerHTML=`
            <div id="no-results">
                <img class="error-wizard-gif" src="/loading-screen-wizard.gif" alt="reading wizard in candle light">
                <p>No spells matches the search. Please try a different spell or level.</p>
            </div>
        `;return}let n=``;e.forEach(e=>{let t=new c(e);n+=`
        <a data-id="${e.name}" href="spell.html?index=${e.index}">
            <article class="spell-card">
                <h2>${e.name}</h2>
                <p>${t.level}</p> 
            </article>
        </a> 
        `}),t.innerHTML=n}var u=document.getElementById(`up-button`);u?.addEventListener(`click`,f),window.onscroll=function(){d()};function d(){if(!u){console.log(`up-button element not found`);return}document.body.scrollTop>20||document.documentElement.scrollTop>20?u.style.display=`block`:u.style.display=`none`}function f(){document.body.scrollTop=0,document.documentElement.scrollTop=0}function p(e,t){return e.filter(e=>e.name.toUpperCase().includes(t.toUpperCase()))}function m(e,t){return t===`all`?e:e.filter(e=>String(e.level)===t)}function h(){let e=document.getElementById(`search-input`).value.trim(),t=document.getElementById(`level-filter`).value;l(m(p(g.spells,e),t))}var g=new class{spells;level;constructor(){this.spells=[],this.level=[]}};async function _(){g.spells=(await t()).results,l(g.spells),a(),s(),h()}document.getElementById(`search-input`)?.addEventListener(`input`,()=>{h(),i()}),document.getElementById(`level-filter`)?.addEventListener(`change`,()=>{h(),o()}),_();