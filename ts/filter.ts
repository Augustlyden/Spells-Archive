export function searchSpell() {
    const userInput = (document.getElementById('search-input') as HTMLInputElement);
    const userSearch = userInput.value.trim().toUpperCase();
    let spellPageContent = document.getElementById('spell-page-content');
    let card = spellPageContent?.getElementsByTagName('a');

    if (!card) {
        console.log("cards not found");
        return;
    };

    for (let i = 0; i < card.length; i++ ) {
        const textValue: string = card[i]?.innerText || card[i]?.textContent
        if (textValue.toUpperCase().indexOf(userSearch) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    };
}