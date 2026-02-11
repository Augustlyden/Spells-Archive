import {fetchSpellBook, type SpellBookOverview} from './api.js';

async function loadSpellBook() {
    const spellBook = await fetchSpellBook();
    displaySpells(spellBook);
}
loadSpellBook();

function displaySpells(spellBook: SpellBookOverview[]) {
    let spellPageContent = document.getElementById('spell-page-content');

    if (!spellPageContent) {
        console.log("spell-page-content element not found");
        return;
    }

    console.log(spellBook)

    spellBook.forEach(spell => {
        spellPageContent.innerHTML += `
        <a href="spell.html?index=${spell.index}">
            <article class="spell-card">
                <h2>${spell.name}</h2>
                <p>Level ${spell.level}</p> 
            </article>
        </a> 
        `
    }); 
}