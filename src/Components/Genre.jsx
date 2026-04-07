export const Genre = ({ data, onGenreClick }) => {
    const getGenreColor = (genre) => {
        switch (genre.toLowerCase()) {
            case "fantasy": return "#5d8b67";
            case "fiction": return "#4f5da5";
            case "science fiction": return "#3498db";
            case "romance": return "#e74c3c";
            case "mystery": return "#753f83";
            case "adventure": return "#2ecc71";
            case "dystopian": return "#d21e21";
            case "horror": return "#aa451b";
            default: return "#7f8c8d";
        }
    };

    return (
        <div
            className="genre-switch"
            style={{ backgroundColor: getGenreColor(data.genre) }}
            onClick={(e) => {
                e.stopPropagation();
                onGenreClick(data.genre);
            }}
        >
            {data.genre}
        </div>
    );
};