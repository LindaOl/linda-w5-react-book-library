import { Description } from "./Description";
import { Title } from "./Title";
import { Genre } from "./Genre";
import { Image } from "./Image";

export const Selected = ({ info, onBack, onGenreClick }) => {
    if (!info) return <div>Select a book.</div>;

    return (
        <div className="SelectedWrapper">
            <div className="Selection">
                {/* Back button */}
                <div className="buttonDiv">
                    <button className="backButton" onClick={onBack}>
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
