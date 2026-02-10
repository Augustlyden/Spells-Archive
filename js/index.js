window.addEventListener('DOMContentLoaded', displaySpells)
let spellPageContent = document.getElementById('spell-page-content')

async function fetchSpellBook() {
    try {
        const response = await fetch('https://www.dnd5eapi.co/api/2014/spells');    
        const spellBook = await response.json();
        return spellBook;
    } catch (error) {
        console.error('Error fetching spell book:', error);
        document.body.innerHTML = `
        <div class="error-container">
            <img class="wizard-gif" src="img/loading-screen-wizard.gif" alt="reading wizard in candle light">
            <p class="error-message">Sorry, we couldn't load the archive at this time. <br> ${error.message}. <br>
            We are working on fixing the issue.</p>
        </div>
        `;
    } 
}

async function displaySpells() {
    try {
        spellPageContent.innerHTML = "";

        const spellBook = await fetchSpellBook();

        console.log(spellBook)

        spellBook.results.forEach(spell => {
            spellPageContent.innerHTML += `
            <a href="spell.html?index=${spell.index}">
                <article class="spell-card">
                    <h2>${spell.name}</h2>
                    <p>Level ${spell.level}</p> 
                </article>
            </a> 
            `
        }); 
    } catch (error) {
        console.error('Error displaying spells:', error);
    }
}