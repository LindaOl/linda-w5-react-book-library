export const Header = ({ onHomeClick }) => {
    return (
        <header className="header">
            <h1
                style={{ cursor: "pointer" }}
                onClick={onHomeClick} // reset app state
            >
                Book Gallery
            </h1>
        </header>
    );
};