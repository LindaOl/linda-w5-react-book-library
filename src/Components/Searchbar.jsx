import { FaSearch } from "react-icons/fa";

export const Searchbar = ({
    selectedGenre,
    onGenreChange,
    searchTerm,
    onSearchChange
}) => {
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
                <select
                    value={selectedGenre || "all"}
                    onChange={(e) => {
                        const value = e.target.value;
                        onGenreChange(value === "all" ? null : value);
                    }}
                >
                    <option value="all">All Genres</option>
                    <option value="fiction">Fiction</option>
                    <option value="science fiction">Science Fiction</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="adventure">Adventure</option>
                    <option value="horror">Horror</option>
                    <option value="mystery">Mystery</option>
                    <option value="dystopian">Dystopian</option>
                </select>
            </div>
        </nav>
    );
};
