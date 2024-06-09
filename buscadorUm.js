document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.Input');
    const searchButton = document.querySelector('.box');
  
    function performSearch() {
      const query = searchInput.value;
      if (query) {
        window.location.href = `http://127.0.0.1:3000/search?q=${query}`;
      }
    }
  
    searchButton.addEventListener('click', performSearch);
  
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  });
  