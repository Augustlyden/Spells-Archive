window.addEventListener('DOMContentLoaded', displaySpellDetails)
let spellCardContent = document.getElementById('spell-card-content')

async function fetchSpellDetails() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const spellIndex = urlParams.get('index');
        const response = await fetch(`https://www.dnd5eapi.co/api/2014/spells/${spellIndex}`);
        if (!response.ok) {
            throw new Error('Error: ' + response.statusText)
        }
        const spellDetails = await response.json();
        return spellDetails;
    } catch (error) {
        console.error('Error fetching spell details:', error);
        document.body.innerHTML = `
        <div class="error-container">
            <img class="wizard-gif" src="img/loading-screen-wizard.gif" alt="reading wizard in candle light">
            <p class="error-message">Sorry, we couldn't load the archive at this time. <br> ${error.message}. <br>
            We are working on fixing the issue.</p>
        </div>
        `;
    }
}

async function displaySpellDetails() {
    try {
        const spellDetails = await fetchSpellDetails();
        document.title = `${spellDetails.name}`;

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
        
    } catch (error) {
        console.error('Error displaying spell details:', error);
    }
}