import{i as e,n as t,r as n}from"./api-1J5r5zns.js";e((()=>{n();async function e(){i(await t())}document.addEventListener(`DOMContentLoaded`,e);var r=class{constructor(e){this.data=e}get concentration(){return this.data.concentration===!0?`Yes`:`No`}get material(){return this.data.material??`No materials needed`}get higherLevel(){return this.data.higher_level?.length===0?``:`<p><span>Casting at higher levels</span> <br>${this.data.higher_level}</p>`}get level(){return this.data.level===0?`Cantrip`:this.data.level}get components(){return this.data.components.join(` `)}get desc(){return this.data.desc.join(` `)}};async function i(e){let t=document.getElementById(`spell-card-content`);if(!t){console.log(`spell-card-content element not found`);return}let n=new r(e);document.title=`${e.name}`,t.innerHTML=`
        <h2 id="spell-title">${e.name}</h2>
        <article class="spell-card-details">
            <dl class="spell-details">
                <dt>Level</dt>
                <dd>${n.level}</dd>
                <dt>School</dt>
                <dd>${e.school.name}</dd>
                <dt>Range</dt>
                <dd>${e.range}</dd>
                <dt>Duration</dt>
                <dd>${e.duration}</dd>   
                <dt>Concentration</dt>
                <dd>${n.concentration}</dd>   
                <dt>Casting time</dt>
                <dd>${e.casting_time}</dd>
                <dt>Components</dt>
                <dd>${n.components}</dd>
                <dt>Materials</dt>
                <dd>${n.material}</dd>
            </dl>
            <div class="spell-description">
                <p><span>Spell Description</span> <br>${n.desc}</p>
                ${n.higherLevel}

            </div>
        </article>`}}))();