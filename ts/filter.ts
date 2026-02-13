export function searchSpell() {
    const userInput = (document.getElementById('search-input') as HTMLInputElement);
    const userSearch = userInput.value.trim().toUpperCase();
    let spellPageContent = document.getElementById('spell-page-content');
    let card = spellPageContent?.getElementsByTagName('a');

    Array.from(card as HTMLCollectionOf<HTMLElement>).forEach((cardValue) => {
        const textValue = (cardValue.innerText || cardValue.textContent) ?? "Not found."
        cardValue.style.display = textValue.toUpperCase().includes(userSearch)
            ? ""
            : "none"
    });
}