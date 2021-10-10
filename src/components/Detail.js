import React from "react";
import { Redirect, useParams } from "react-router";
import products from "../products";

function Detail() {
  const slug = useParams().detailSlug;
  const detail = products.find((info) => info.slug === slug);
  if (!detail) return <Redirect to="/" />;
  return (
    <div className="detail">
      <>
        <h5>{detail.name}</h5>
        <img src={detail.image} alt="cookie" />
        <p>{detail.price} KD</p>
        <p>{detail.description}</p>
      </>
    </div>
  );
}

export default Detail;
