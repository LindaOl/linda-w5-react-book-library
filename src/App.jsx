import "./App.css";
import "./components.css";
import data from "./data.json";
import { useState } from "react";
import { Header } from "./components/Header";
import { Books } from "./components/Book";
import { Searchbar } from "./components/Searchbar";
import { Footer } from "./components/Footer";
import { Selected } from "./components/Selected";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const { books } = data;
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // genre filter
  const filteredBooks = books.filter(book => {
    if (!selectedGenre) return true;
    return book.genre?.trim().toLowerCase() === selectedGenre.toLowerCase();
  });

  // search filter (always from full list)
  const searchResults = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Decide which to show: search overrides genre
  const booksToShow = searchTerm ? searchResults : filteredBooks;

  const handleClearFilter = () => setSelectedGenre(null);

  const handleGenreClick = genre => {
    setSelectedGenre(genre.toLowerCase());
    setSelectedBook(null); // back to list
    setSearchTerm(""); // reset search so genre filter works
  };

  const handleReset = () => {
    setSelectedBook(null);
    setSelectedGenre(null);
    setSearchTerm("");
  };

  return (
    <div className="main-content">
      <div className="filterable-book-table">
        <Header onHomeClick={handleReset} />

        {/* Searchbar always visible */}
        <Searchbar
          selectedGenre={selectedGenre}
          onGenreChange={genre => {
            setSelectedGenre(genre);
            setSelectedBook(null); // clear selected book when changing genre
            setSearchTerm("");      // reset search
          }}
          searchTerm={searchTerm}
          onSearchChange={value => {
            setSearchTerm(value);   // update search term
            setSelectedBook(null);  // clear selected book so list re-renders
          }}
        />


        {/* Show Selected or book list */}
        {selectedBook ? (
          <Selected
            info={selectedBook}
            onBack={() => setSelectedBook(null)}
            onGenreClick={handleGenreClick}
          />
        ) : (
          <>
            {selectedGenre && (
              <div className="button-div">
                <button className="all-button" onClick={handleClearFilter}>
                  All
                </button>
              </div>
            )}

            <Books
              data={{ books: booksToShow }}
              onSelect={(book) => {
                setSelectedBook(book); // select the book
                setSearchTerm("");      // reset search input
              }}
              onGenreClick={handleGenreClick}
            />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
