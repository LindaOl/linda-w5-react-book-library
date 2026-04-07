

export const RandomBook = ({ onRandomPick, disabled }) => {
    return (
        <button
            className="random-button"
            onClick={onRandomPick}
            disabled={disabled}
        >
            Random book
        </button>
    );
};