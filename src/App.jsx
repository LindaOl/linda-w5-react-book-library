import "./App.css";
import data from "./data.json";
import { useState } from "react";
import { Header } from "./Components/Header";
import { Books } from "./Components/Book";
import { Searchbar } from "./Components/Searchbar";
import { Footer } from "./Components/Footer";
import { Selected } from "./Components/Selected";

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
    const matchesGenre = selectedGenre
      ? book.genre.toLowerCase() === selectedGenre.toLowerCase()
      : true;

    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesGenre && matchesSearch;
  });

  const handleClearFilter = () => {
    setSelectedGenre(null);
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(prev => prev === genre ? null : genre);
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
            onGenreChange={setSelectedGenre}
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
                onGenreClick={setSelectedGenre}
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
