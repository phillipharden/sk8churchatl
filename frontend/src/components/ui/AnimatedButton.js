const AnimatedButton = ({
    text,
    href,
    onClick,
    target,
    rel,
    className = "",
}) => {
    const classes = `animated-button ${className}`.trim();

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                onClick={onClick}
                target={target}
                rel={rel}
            >
                <span>{text}</span>
            </a>
        );
    }

    return (
        <button className={classes} onClick={onClick} type="button">
            <span>{text}</span>
        </button>
    );
};

export default AnimatedButton;