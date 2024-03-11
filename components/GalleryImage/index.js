import React from "react";
import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery";

const propTypes = {};

const GalleryImage = ({}) => {
  //! State
  const images = [
    {
      original: "static/assets/img/product/avt.jpg",
      thumbnail: "static/assets/img/product/avt.jpg",
    },
    {
      original: "static/assets/img/product/1.jpg",
      thumbnail: "static/assets/img/product/1.jpg",
    },
    {
      original: "static/assets/img/product/2.jpg",
      thumbnail: "static/assets/img/product/2.jpg",
    },
    {
      original: "static/assets/img/product/3.jpg",
      thumbnail: "static/assets/img/product/3.jpg",
    },
    {
      original: "static/assets/img/product/4.jpg",
      thumbnail: "static/assets/img/product/4.jpg",
    },
    {
      original: "static/assets/img/product/5.jpg",
      thumbnail: "static/assets/img/product/5.jpg",
    },
  ];

  //! Function
  //* TODO: Logic click item

  //! Render
  return <ImageGallery items={images} autoPlay showPlayButton={false} />;
};

GalleryImage.propTypes = propTypes;
export default GalleryImage;
