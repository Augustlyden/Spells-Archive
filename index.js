import { fetchSpellBook } from './api.js';
import { saveSearchInput, retrieveSearchInput, saveLevelFilter, retrieveLevelFilter } from './localStorage.js';
import { handleFilterChange } from "./filter.js";
import { SpellModel } from './model.js';
import { displaySpells } from './index-view.js';
export let model = new SpellModel();
async function loadSpellBook() {
    let spellBook = await fetchSpellBook();
    model.spells = spellBook.results;
    displaySpells(model.spells);
    retrieveSearchInput();
    retrieveLevelFilter();
    handleFilterChange();
}
;
/* document.addEventListener('DOMContentLoaded', loadSpellBook); */
const search = document.getElementById('search-input');
search?.addEventListener('input', () => {
    handleFilterChange();
    saveSearchInput();
});
const levelFilter = document.getElementById('level-filter');
levelFilter?.addEventListener('change', () => {
    handleFilterChange();
    saveLevelFilter();
});
loadSpellBook();
