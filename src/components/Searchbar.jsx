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

const sortOptions = [
    { value: "newest", label: "Newest first" },
    { value: "oldest", label: "Oldest first" },
    { value: "alphabetical", label: "Author: A–Z" },
    { value: "reverse", label: "Author: Z–A" },
    { value: "rating-high", label: "Rating: high to low" },
    { value: "rating-low", label: "Rating: low to high" }
];

export const Searchbar = ({
    selectedGenre,
    onGenreChange,
    searchTerm,
    onSearchChange,
    sortOrder,
    onSortChange
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const handleSelect = (genre) => {
        onGenreChange(genre === "all" ? null : genre);
        setIsOpen(false);
    };

    const handleSortSelect = (sortValue) => {
        onSortChange(sortValue);
        setIsSortOpen(false);
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

            <div className="sort-and-filter">
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


                <div className="sorting">
                    <div className="custom-select" onClick={() => setIsSortOpen(prev => !prev)}>
                        {sortOrder
                            ? sortOptions.find((option) => option.value === sortOrder)?.label
                            : "Sorting"}

                        <div className={`options ${isSortOpen ? "open" : ""}`}>
                            {sortOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className="option"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSortSelect(option.value);
                                    }}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};