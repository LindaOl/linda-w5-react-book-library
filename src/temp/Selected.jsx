import { Description } from "./Description.jsx";
import { Title } from "./Title.jsx";
import { Genre } from "./Genre.jsx";
import { Image } from "./Image.jsx";

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

                <Image data={info} />
                <Title data={info} />
                <Description data={info} />

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
