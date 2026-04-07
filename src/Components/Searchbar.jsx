import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const genres = [
    { value: "all", label: "All Genres" },
    { value: "fiction", label: "Fiction" },
    { value: "science fiction", label: "Science Fiction" },
    { value: "fantasy", label: "Fantasy" },
    { value: "adventure", label: "Adventure" },
    { value: "horror", label: "Horror" },
    { value: "mystery", label: "Mystery" },
    { value: "dystopian", label: "Dystopian" },
];

export const Searchbar = ({ selectedGenre, onGenreChange, searchTerm, onSearchChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (genre) => {
        onGenreChange(genre === "all" ? null : genre); // reset null for 'All Genres'
        setIsOpen(false);
    };

    return (
        <nav>
            <div className="search">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>

            <div className="filters">
                <div className="custom-select" onClick={() => setIsOpen(prev => !prev)}>
                    {selectedGenre
                        ? genres.find((g) => g.value === selectedGenre)?.label
                        : "All Genres"}
                    <div className={`options ${isOpen ? "open" : ""}`}>
                        {genres.map((genre) => (
                            <div
                                key={genre.value}
                                className="option"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleSelect(genre.value);
                                }}
                            >
                                {genre.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
