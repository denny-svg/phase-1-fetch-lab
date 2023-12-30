function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const response = await
   fetch("https://anapioficeandfire.com/api/books.json")
  const fetchbooks = response.json();
  console.log(fetchbooks);
  
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
