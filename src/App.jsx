import "./App.css";
import "./components.css";
import data from "./data.json";
import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Book } from "./components/Book.jsx";
import { Searchbar } from "./components/Searchbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Selected } from "./components/Selected.jsx";
import { RandomBook } from "./components/RandomBook.jsx";




function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(null);

  const { books } = data;

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

  // Decide which to show: search overrides genre, sorting order if chosen
  const booksToShowBase = searchTerm ? searchResults : filteredBooks;

  const booksToShow = [...booksToShowBase].sort((a, b) => {
    if (sortOrder === "newest") return b.year - a.year;
    if (sortOrder === "oldest") return a.year - b.year;

    if (sortOrder === "alphabetical") return a.author.localeCompare(b.author);
    if (sortOrder === "reverse") return b.author.localeCompare(a.author);


    if (sortOrder === "rating-high") return b.rating - a.rating;
    if (sortOrder === "rating-low") return a.rating - b.rating;

    return 0;
  });

  const handleRandomBook = () => {
    if (booksToShow.length === 0) return;

    const randomIndex = Math.floor(Math.random() * booksToShow.length);
    const randomBook = booksToShow[randomIndex];

    setSelectedBook(randomBook);
    setSearchTerm("");
  };

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
            setSelectedBook(null);
            setSearchTerm("");
          }}
          searchTerm={searchTerm}
          onSearchChange={value => {
            setSearchTerm(value);
            setSelectedBook(null);
          }}
          sortOrder={sortOrder}
          onSortChange={value => {
            setSortOrder(value);
            setSelectedBook(null);
          }}
        />

        <RandomBook
          onRandomPick={handleRandomBook}
          disabled={booksToShow.length === 0}
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

            <Book
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
