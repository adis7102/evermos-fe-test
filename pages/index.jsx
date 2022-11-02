import React, { useEffect, useState } from "react";
import Head from "next/head";

import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { getListData } from "../store/actions";
import { Button, Spinner } from "react-bootstrap";
import fetcher from "../fetch/index.js";

import Card from '../components/ProductCard';

import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { products } = props;
  const dispatch = useDispatch();

  const { loading, filteredDataProducts } = useSelector((state) => state);

  const [listProducts, setListProducts] = useState(products || []);
  const [tag, setTag] = useState("");

  useEffect(() => {
    if (tag) {
      dispatch(getListData(`http://localhost:4000/products?tag=${tag}`));
    }
  }, [tag]);

  useEffect(() => {
    if (filteredDataProducts.length) {
      setListProducts(filteredDataProducts);
    }
  }, [filteredDataProducts]);

  const handleSelectAllTag = () => {
    setTag("");
    setListProducts(products);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Beta Shop</title>
        <meta name="description" content="Beta Shop is a market place" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="title-wrap">
        <h1>Welcome to Beta Shop</h1>
      </div>

      <div className="tags-container">
        <p>Cari berdasarkan jenis produk</p>

        <div className="tag-list">
          <Button
            variant={tag === "" ? "primary" : "outline-primary"}
            onClick={() => handleSelectAllTag()}
          >
            Semua
          </Button>
          <Button
            variant={tag === "accessories" ? "primary" : "outline-primary"}
            onClick={() => setTag("accessories")}
          >
            Accessories
          </Button>
          <Button
            variant={tag === "gadget" ? "primary" : "outline-primary"}
            onClick={() => setTag("gadget")}
          >
            Gadget
          </Button>
          <Button
            variant={tag === "fashion" ? "primary" : "outline-primary"}
            onClick={() => setTag("fashion")}
          >
            Fashion
          </Button>
        </div>
      </div>

      {!loading ? (
        <div className="list-container">
          {(listProducts || []).map(item => {
            const { id, productName, image, price, rating } = item || {};

            return (
              <Link key={id} href={`${id}`}>
                <Card
                  productname={productName}
                  image={image}
                  price={price}
                  rating={rating}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p>Loading ... </p>
        </>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetcher("http://localhost:4000/products", {
    method: "GET"
  });
  const data = await response;

  return {
    props: {
      products: data,
    },
  };
}
