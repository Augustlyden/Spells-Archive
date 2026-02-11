const search = document.getElementById('search-input')

export function saveSearchInput(e) {
    e.preventDefault()
    localStorage.setItem('searchInput',search.value)
}

export function retrieveSearchInput() {
    const savedValue = localStorage.getItem('searchInput')
    if (savedValue !== null) {
        search.value = savedValue;
    }
}