export const Header = ({ onHomeClick }) => {
    return (
        <header className="Header">
            <h1
                style={{ cursor: "pointer" }}
                onClick={onHomeClick} // reset app state
            >
                Book Gallery
            </h1>
        </header>
    );
};