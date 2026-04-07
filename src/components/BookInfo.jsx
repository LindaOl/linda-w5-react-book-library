import { Genre } from "./Genre.jsx";

export const BookInfo = ({ year, genre, rating, description, onGenreClick }) => {
    return (
        <div className="book-info">
            <p className="meta-text">
                Year: {year} Rating: {rating}
            </p>
            <p>Genre: {genre}</p>

            <div className="book-description">
                <p>{description}</p>
            </div>

            <Genre
                data={{ genre }}
                onGenreClick={onGenreClick}
            />
        </div>
    );
};