export const TextSVG = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
        >
            {/* Square box */}
            <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" />

            {/* "T" inside the box, centered both vertically and horizontally */}
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 9h10M12 9v8" // "T" shape, centered both vertically and horizontally
            />
        </svg>
    );
};
