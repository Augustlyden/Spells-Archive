import {fetchSpellDetails, type SpellDetailsOverview} from './api.js';

async function loadSpellDetails() {
    const spellDetails = await fetchSpellDetails();
    displaySpellDetails(spellDetails)
}

document.addEventListener('DOMContentLoaded', loadSpellDetails)

class spellDetailsExeptions {
    constructor(private data: SpellDetailsOverview) {}
        
    get concentration(): string {
        return this.data.concentration === true
            ? "Yes"
            : "No"
    }

    get material(): string {
        return this.data.material ?? "No materials needed"
    }

    get higherLevel(): string {
        return this.data.higher_level?.length === 0 
            ? ""
            : `<p><span>Casting at higher levels</span> <br>${this.data.higher_level}</p>`
    }

    get components() {return this.data.components.join(" ")}
    get desc() {return this.data.desc.join(" ")}
    }


async function displaySpellDetails(spellDetails: SpellDetailsOverview) {
    
    let spellCardContent = document.getElementById('spell-card-content')

    if (!spellCardContent) {
        console.log("spell-card-content element not found");
        return;
    }

    const exception = new spellDetailsExeptions(spellDetails);

    document.title = `${spellDetails.name}`;

    spellCardContent.innerHTML = `
        <h2 id="spell-title">${spellDetails.name}</h2>
        <article class="spell-card-details">
            <dl class="spell-details">
                <dt>Level</dt>
                <dd>${spellDetails.level}</dd>
                <dt>School</dt>
                <dd>${spellDetails.school.name}</dd>
                <dt>Range</dt>
                <dd>${spellDetails.range}</dd>
                <dt>Duration</dt>
                <dd>${spellDetails.duration}</dd>   
                <dt>Concentration</dt>
                <dd>${exception.concentration}</dd>   
                <dt>Casting time</dt>
                <dd>${spellDetails.casting_time}</dd>
                <dt>Components</dt>
                <dd>${exception.components}</dd>
                <dt>Materials</dt>
                <dd>${exception.material}</dd>
            </dl>
            <div class="spell-description">
                <p><span>Spell Description</span> <br>${exception.desc}</p>
                ${exception.higherLevel}

            </div>
        </article>`;
}
