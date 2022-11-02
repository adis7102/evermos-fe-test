import Image from "next/image";

import { currencyFormatter } from "../../helpers";

const ProductCard = (props) => {
  const { productname, image, price, rating } = props || {};

  return (
    <div className="product-card">
      <div className="product-card-image">
        <Image alt={productname} src={image} width={260} height={150} />
      </div>
      <div className="product-card-content">
        <div className="product-card-content-title">{productname}</div>
        <p className="product-card-content-price">
          {currencyFormatter(price, "indonesia")}
        </p>
        <p className="product-card-content-rating">
          Rating: <span className="rating-number">{rating}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
