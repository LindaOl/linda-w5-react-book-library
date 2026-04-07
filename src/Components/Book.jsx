import { Description } from "./Description.js";
import { Title } from "./Title.js";
import { Genre } from "./Genre.js";
import { Image } from "./Image.js";
import { Pricetag } from "./Pricetag.jsx";


export const Books = ({ data, onSelect, onGenreClick }) => {
    return (
        <div className="cards">
            {data.books.map(info => (
                <div
                    key={info.title}
                    className="card"
                    onClick={() => onSelect(info)}
                >
                    <div className="image-wrapper">
                        <Image data={info} />
                        <Pricetag link={info.link} />
                    </div>
                    <Title data={info} />
                    <Description data={info} />
                    <Genre data={info} onGenreClick={onGenreClick} />
                </div>
            ))}
        </div>
    );
};
