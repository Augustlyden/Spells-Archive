import type { SpellBookOverview } from "./api.js";

class SpellExeptions {
    constructor(private data: SpellBookOverview) {}

    get level(): string | number {
        return this.data.level === 0
            ? "Cantrip"
            : "level " + this.data.level
    }
}

export function displaySpells(spellBook: SpellBookOverview[]) {
    let spellPage = document.getElementById('spell-page-content');

    if (!spellPage) {
        console.log("spell-page- element not found");
        return;
    }

    if (spellBook.length === 0) {
        spellPage.innerHTML = `
            <div id="no-results">
                <img class="error-wizard-gif" src="/loading-screen-wizard.gif" alt="reading wizard in candle light">
                <p>No spells matches the search. Please try a different spell or level.</p>
            </div>
        `;
        return;
    }

    let spellPageContent = ""

    spellBook.forEach(spell => {
        const exception = new SpellExeptions(spell);

        spellPageContent += `
        <a data-id="${spell.name}" href="spell.html?index=${spell.index}">
            <article class="spell-card">
                <h2>${spell.name}</h2>
                <p>${exception.level}</p> 
            </article>
        </a> 
        `;
    }); 

    spellPage.innerHTML = spellPageContent
};

const upButton = document.getElementById('up-button');

upButton?.addEventListener('click', topFunction);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (!upButton) {
        console.log("up-button element not found");
        return;
    }

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}