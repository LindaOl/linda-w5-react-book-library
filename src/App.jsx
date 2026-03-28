import "./App.css";
import data from "./data.json";
import { useState } from "react";
import { Header } from "./components/Header";
import { Books } from "./components/Book";
import { Searchbar } from "./components/Searchbar";
import { Footer } from "./components/Footer";
import { Selected } from "./components/Selected";

function App() {

  /*States made by selecting book, filtering by genre or searching*/
  // State if one book is clicked
  const [selectedBook, setSelectedBook] = useState(null);

  // All books from JSON
  const { books } = data;

  // State for genre filtering
  const [selectedGenre, setSelectedGenre] = useState(null);

  // State for search bar
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter(book => {
    const bookGenre = book.genre?.trim().toLowerCase();
    const selected = selectedGenre?.trim().toLowerCase();

    const matchesGenre = selected ? bookGenre === selected : true;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesGenre && matchesSearch;
  });

  const handleClearFilter = () => {
    setSelectedGenre(null);
  };

  const handleGenreClick = (genre) => {
    const normalized = genre.toLowerCase();
    setSelectedGenre(normalized);
    setSelectedBook(null); // go back to list
  };

  const handleReset = () => {
    setSelectedBook(null);
    setSelectedGenre(null);
    setSearchTerm("");
  };

  return (
    <>
      <div className="main-content">
        <div className="filterable-book-table">
          <Header onHomeClick={handleReset} />

          {/* ROW WITH SEARCHBAR, and Filteractivation */}
          <Searchbar
            selectedGenre={selectedGenre}
            onGenreChange={handleGenreClick}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          {/* BOOK LIBRARY, SELECTED BOOK or filtered by genre */}
          {selectedBook ? (
            <Selected
              info={selectedBook}
              onBack={() => setSelectedBook(null)}
              onGenreClick={handleGenreClick} // pass handler if genre button is clicked
            />
          ) : (
            <>
              {selectedGenre && (
                <div className="buttonDiv">
                  <button
                    className="allButton"
                    onClick={handleClearFilter}
                  >
                    All
                  </button>
                </div>
              )}

              <Books
                data={{ books: filteredBooks }}
                onSelect={setSelectedBook}
                onGenreClick={handleGenreClick}  // not setSelectedGenre
              />
            </>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
