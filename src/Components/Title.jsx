export const Title = ({ data }) => {
    return (
        <div className="title-wrapper">
            <div className="title">
                <h2>{data.title}</h2>
                <h3>{data.author}</h3>
            </div>
        </div>
    )
};