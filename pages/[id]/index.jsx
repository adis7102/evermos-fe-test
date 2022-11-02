import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";

import fetcher from "../../fetch/index.js";
import { currencyFormatter } from "../../helpers";

import Card from "../../components/ProductCard";

const index = (props) => {
  const { product, listProducts } = props;
  const { id, productName, image, price, rating, description } = product || {};

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-detail-image">
          <Image
            alt={productName}
            src={image}
            width={260}
            height={150}
          />
        </div>
        <div className="product-detail-content">
          <div className="product-detail-content-title">
            {productName}
          </div>
          <div className="product-detail-content-rating">
            Rating: <span className="rating-badge">{rating}</span>
          </div>
          <div className="product-detail-content-price">
            {currencyFormatter(price, 'indonesia')}
          </div>
          <div className="product-detail-content-description">
            {description}
          </div>
        </div>
      </div>
      <div className="product-detail-list">
        <div className="product-detail-list-title">
            Temukan Produk Serupa!
        </div>
        <div className="product-detail-list-row">
          {(listProducts || []).map(item => {
          const { id: itemId, productName: itemName, image: itemImage, price: itemPrice, rating: itemRating } = item || {};

            return itemId !== id && (
              <Link key={itemId} href={`${itemId}`}>
                <Card
                  productname={itemName}
                  image={itemImage}
                  price={itemPrice}
                  rating={itemRating}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default index;

export async function getServerSideProps(context) {
  const { id }= context?.params;
  const responseFindById = await fetcher(`http://localhost:4000/products?id=${id}`, {
    method: "GET"
  });
  const dataProduct = await responseFindById;

  const responseFindByTag = await fetcher(`http://localhost:4000/products?tag=${dataProduct?.[0]?.tag}`, {
    method: "GET"
  });
  const listProduct = await responseFindByTag;

  return {
    props: {
      product: dataProduct?.[0],
      listProducts: listProduct
    }
  };
}