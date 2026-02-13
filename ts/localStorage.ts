const search = (document.getElementById('search-input') as HTMLInputElement);

export function saveSearchInput() {
    localStorage.setItem('searchInput',search.value);
};

export function retrieveSearchInput() {
    const savedValue = localStorage.getItem('searchInput');
    if (savedValue !== null) {
        search.value = savedValue;
    };
};