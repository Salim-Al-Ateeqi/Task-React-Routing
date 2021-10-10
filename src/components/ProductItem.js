import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <div className="productWrapper">
      <Link to={`/productlist/${product.slug}`}>
        <img alt={product.name} src={product.image} />

        <p>{product.name}</p>
        <p className="product-price">{product.price} KD</p>
      </Link>
    </div>
  );
};

export default ProductItem;
