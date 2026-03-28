export const Title = ({ data }) => {
    return (
        <div className="TitleWrapper">
            <div className="Title">
                <h2>{data.title}</h2>
                <h3>{data.author}</h3>
            </div>
        </div>
    )
};