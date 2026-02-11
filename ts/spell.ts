import {fetchSpellDetails, type SpellDetailsOverview} from './api.js';

async function loadSpellDetails() {
    const spellDetails = await fetchSpellDetails();
    displaySpellDetails(spellDetails)
}

loadSpellDetails();

async function displaySpellDetails(spellDetails: SpellDetailsOverview) {
    let spellCardContent = document.getElementById('spell-card-content')
        
    document.title = `${spellDetails.name}`;

    if (!spellCardContent) {
        console.log("spell-card-content element not found");
        return;
    }

    spellCardContent.innerHTML += `
        <h2>${spellDetails.name}</h2>
        <article class="spell-card-details">
            <dl class="spell-details">
                <dt>Level</dt>
                <dd>${spellDetails.level}</dd>
                <dt>Casting time</dt>
                <dd>${spellDetails.casting_time}</dd>
                <dt>Range</dt>
                <dd>${spellDetails.range}</dd>
                <dt>Components</dt>
                <dd>${spellDetails.components}</dd>
                <dt>Duration</dt>
                <dd>${spellDetails.duration}</dd>   
                <dt>School</dt>
                <dd>${spellDetails.school.name}</dd>
                <dt>Materials</dt>
                <dd>${spellDetails.material}</dd>
            </dl>
            <div class="spell-description">
                <p><span>Spell Description</span> <br>${spellDetails.desc}</p>
                <p><span>Casting at higher levels</span> <br>${spellDetails.higher_level}</p>
            </div>
        </article>`;
}