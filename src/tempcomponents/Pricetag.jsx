export const Pricetag = ({ link }) => {
    if (!link) return null;  // prevent crash

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="price-wrapper"
        >
            <img
                className="price-icon"
                src="/images/pricetag.png"
                alt="price tag"
            />
            <span className="tool-tip">Go to Amazon</span>
        </a>
    );
};