export function searchSpell() {
    const userInput = document.getElementById('search-input') as HTMLInputElement
    const userSearch:string = userInput.value.toUpperCase();
    let spellPageContent = document.getElementById('spell-page-content');
    let card = spellPageContent?.getElementsByTagName('a');

        for (let i = 0; i < card.length; i++ ) {
            const textValue = card[i]?.innerText || card[i]?.textContent
            if (textValue.toUpperCase().indexOf(userSearch) > -1) {
                card[i].style.display = "";
            } else {
                card[i].style.display = "none";
            }
        }
}