import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <div className="productWrapper">
      <Link to={`/productlist/${product.slug}`}>
        <img alt={product.title} src={product.poster} />

        <p>{product.title}</p>
        <p className="product-price">{product.price} KD</p>
      </Link>
    </div>
  );
};

export default ProductItem;
