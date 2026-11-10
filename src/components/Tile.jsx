import './Tile.css';

function Tile({ imageURL, title, paragraphs }) {
    return (
        <section>
            {imageURL ? (
                <img src={imageURL} alt={title || "Designer"} />
            ) : (
                <>
                    <h2>{title}</h2>

                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </>
            )}
        </section>
    );
}

export default Tile;