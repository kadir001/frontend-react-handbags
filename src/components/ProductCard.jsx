import './ProductCard.css';

function ProductCard({ isBestseller, imageURL, name, price }) {
    return (
        <article>
            {isBestseller && <span>Bestseller</span>}

            <img src={imageURL} alt={name} />

            <p>{name}</p>

            <h4>€ {price} ,-</h4>
        </article>
    );
}

export default ProductCard;