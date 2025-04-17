document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('.search-bar');
    const searchIcon = document.querySelector('.search-icon');

    searchIcon.addEventListener('click', () => {
        const searchText = searchBar.value.trim();
        
        if(searchText) {           
            searchBar.placeholder = `Você buscou por: "${searchText}"`;           
            searchBar.value = '';
        }
    });
    
});