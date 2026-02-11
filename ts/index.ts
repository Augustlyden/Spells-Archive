import { fetchSpellBook, type SpellBookOverview } from './api.js';
import { saveSearchInput } from './localStorage.js';
import { retrieveSearchInput } from './localStorage.js';
import { searchSpell } from "./filter.js";

async function loadSpellBook() {
    const spellBook = await fetchSpellBook();
    displaySpells(spellBook);

    retrieveSearchInput()

    searchSpell()
}
document.addEventListener('DOMContentLoaded', loadSpellBook)

function displaySpells(spellBook: SpellBookOverview[]) {
    let spellPageContent = document.getElementById('spell-page-content');

    if (!spellPageContent) {
        console.log("spell-page-content element not found");
        return;
    }

    console.log(spellBook)

    spellBook.forEach(spell => {
        spellPageContent.innerHTML += `
        <a data-id="${spell.name}" href="spell.html?index=${spell.index}">
            <article class="spell-card">
                <h2>${spell.name}</h2>
                <p>Level ${spell.level}</p> 
            </article>
        </a> 
        `
    }); 
}

const search = document.getElementById('search-input')
search?.addEventListener('input', searchSpell)
search?.addEventListener('input', saveSearchInput)