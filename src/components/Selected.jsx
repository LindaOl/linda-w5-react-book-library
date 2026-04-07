import { Description } from "./Description.jsx";
import { Title } from "./Title.jsx";
import { Genre } from "./Genre.jsx";
import { CoverImage } from "./CoverImage.jsx";
import { Pricetag } from "./Pricetag.jsx";
import { Author } from "./Author.jsx";

export const Selected = ({ info, onBack, onGenreClick }) => {
    if (!info) return <div>Select a book.</div>;

    return (
        <div className="selected-wrapper">
            <div className="selection">
                {/* Back button */}
                <div className="button-div">
                    <button className="back-button" onClick={onBack}>
                        ← Back
                    </button>
                </div>

                <div className="image-wrapper">
                    <CoverImage data={info} />
                    <Pricetag link={info.link} />
                </div>
                <Title data={info} />
                <Author data={info} />
                <Description data={info} />
                <div>
                    <h2>Other information:</h2>
                    <p>Year: {info.year}</p>
                    <p>Rating: {info.rating}</p>
                </div>


                {/* Clicking genre filters and returns to book list */}
                <Genre
                    data={info}
                    onGenreClick={(genre) => {
                        onGenreClick(genre);
                    }}
                />
            </div>
        </div>
    );
};
