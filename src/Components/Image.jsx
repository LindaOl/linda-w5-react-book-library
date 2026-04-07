
export const Image = ({ data }) => {
    return (
        <img className="image" src={data.image} alt={data.title} />
    )
};