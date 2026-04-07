import { Title } from "./Title.jsx";
import { CoverImage } from "./CoverImage.jsx";
import { Pricetag } from "./Pricetag.jsx";
import { Author } from "./Author.jsx";
import { BookInfo } from "./BookInfo.jsx";

export const Book = ({ data, onSelect, onGenreClick }) => {
    return (
        <div className="cards">
            {data.books.map(info => (
                <div
                    key={info.title}
                    className="card"
                    onClick={() => onSelect(info)}
                >
                    <div className="image-wrapper">
                        <CoverImage data={info} />
                        <Pricetag link={info.link} />
                    </div>

                    <Title data={info} />
                    <Author data={info} />
                    <BookInfo
                        year={info.year}
                        genre={info.genre}
                        rating={info.rating}
                        description={info.description}
                        onGenreClick={onGenreClick}
                    />
                </div>
            ))}
        </div>
    );
};