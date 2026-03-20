import { fetchSpellBook, type SpellBookOverview } from './api.js';
import { saveSearchInput, retrieveSearchInput } from './localStorage.js';
import { searchSpell } from "./filter.js";
import { SpellModel } from './model.js';
import { displaySpells } from './spell-view.js';

let model = new SpellModel();

async function loadSpellBook() {
    let spellBook = await fetchSpellBook();

    model.spells = spellBook.results
    displaySpells(model.spells);
    retrieveSearchInput();

    searchSpell(model.spells);
};
/* document.addEventListener('DOMContentLoaded', loadSpellBook); */


const search = document.getElementById('search-input');
search?.addEventListener('input', () =>{
    searchSpell(model.spells);
});
search?.addEventListener('input', saveSearchInput);

loadSpellBook()