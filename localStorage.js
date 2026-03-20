const search = document.getElementById('search-input');
const levelFilter = document.getElementById('level-filter');
export function saveSearchInput() {
    localStorage.setItem('searchInput', search.value);
}
;
export function retrieveSearchInput() {
    const savedSearchValue = localStorage.getItem('searchInput');
    if (savedSearchValue !== null) {
        search.value = savedSearchValue;
    }
    ;
}
;
export function saveLevelFilter() {
    localStorage.setItem('levelFilter', levelFilter.value);
}
export function retrieveLevelFilter() {
    const savedFilterValue = localStorage.getItem('levelFilter');
    levelFilter.value = savedFilterValue || "all";
}
