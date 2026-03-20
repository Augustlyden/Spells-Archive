import { displaySpells } from "./index-view.js";
import { model } from "./index.js";
function searchSpell(allSpells, name) {
    return allSpells.filter(s => s.name.toUpperCase().includes(name.toUpperCase()));
}
function filterSpells(allSpells, level) {
    if (level === "all")
        return allSpells;
    return allSpells.filter(s => String(s.level) === level);
}
export function handleFilterChange() {
    const nameSearch = document.getElementById('search-input').value.trim();
    const levelFilter = document.getElementById('level-filter').value;
    const nameMatch = searchSpell(model.spells, nameSearch);
    const finalResult = filterSpells(nameMatch, levelFilter);
    displaySpells(finalResult);
}
