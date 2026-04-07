export const Header = ({ onHomeClick }) => {
    return (
        <header className="header" id="header">
            <h1
                style={{ cursor: "pointer" }}
                onClick={onHomeClick} // reset app state
            >
                Book Library
            </h1>
        </header>
    );
};