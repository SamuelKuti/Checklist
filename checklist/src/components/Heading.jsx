
const Heading = ( {content = "", colour = "black"} ) => {
    return (
        <p style={{color: colour}} className="text-5xl font-bold text-heading tracking-tight mb-4">{content}</p>
    );
}

export default Heading;