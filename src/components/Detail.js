import React from "react";
import { Redirect, useParams } from "react-router";
import products from "../products";
import Accordion from "react-bootstrap/Accordion";

function Detail() {
  const slug = useParams().detailSlug;
  const detail = products.find((info) => info.slug === slug);
  if (!detail) return <Redirect to="/" />;
  return (
    <div className="detail">
      <>
        <h1>{detail.title}</h1>
        <img src={detail.poster} alt="movies" />
        <strong>
          <p>Genre: {detail.genres.join(" | ")} </p>
        </strong>
        {/* <p>{detail.overview}</p> */}
      </>

      <Accordion defaultActiveKey="0" className="text" variant="dark">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Overview</Accordion.Header>
          <Accordion.Body>
            <p>{detail.overview}</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Cast</Accordion.Header>
          <Accordion.Body>
            <p>{detail.cast}</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Best Muscial Script</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Detail;
