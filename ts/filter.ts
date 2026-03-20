import type { SpellBookOverview } from "./api.js";
import { displaySpells } from "./index-view.js";
import { model } from "./index.js"

function searchSpell(allSpells: SpellBookOverview[], name: string) {
    return allSpells.filter(s => s.name.toUpperCase().includes(name.toUpperCase()))
}

function filterSpells(allSpells: SpellBookOverview[], level: string) {
    if (level === "all") return allSpells
    return allSpells.filter(s => String(s.level) === level)    
}

export function handleFilterChange() {
    const nameSearch = (document.getElementById('search-input') as HTMLInputElement).value.trim()
    const levelFilter = (document.getElementById('level-filter') as HTMLSelectElement).value

    const nameMatch = searchSpell(model.spells, nameSearch)

    const finalResult = filterSpells(nameMatch, levelFilter)

    displaySpells(finalResult)
}