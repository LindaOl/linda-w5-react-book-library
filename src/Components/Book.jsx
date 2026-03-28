import { Description } from "./Description";
import { Title } from "./Title";
import { Genre } from "./Genre";
import { Image } from "./Image";
import { Pricetag } from "./Pricetag";


export const Books = ({ data, onSelect, onGenreClick }) => {
    return (
        <div className="cards">
            {data.books.map(info => (
                <div
                    key={info.title}
                    className="Card"
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
