export const Image = ({ data }) => {
    return (
        <img className="Image" src={data.image} alt={data.title} />
    )
};