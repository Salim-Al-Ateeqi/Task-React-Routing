import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <div className="productWrapper">
      <Link to={`/productlist/${product.slug}`}>
        <img alt={product.title} src={product.poster} />
      </Link>
      <h5>
        <strong>
          <p>{product.title}</p>
        </strong>
      </h5>

      <div className="descLine">
        <p className="product-price">Genre: {product.genres.join(" | ")}</p>
      </div>
    </div>
  );
};

export default ProductItem;
