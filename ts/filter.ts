import type { SpellBookOverview } from "./api.js";
import { displaySpells } from "./spell-view.js";

export function searchSpell(allSpells: SpellBookOverview[]) {
    const userInput = (document.getElementById('search-input') as HTMLInputElement);
    const userSearch = userInput.value.trim().toUpperCase();

    let filteredSpells = allSpells.filter(s => s.name.toUpperCase().includes(userSearch))
    displaySpells(filteredSpells)
}
