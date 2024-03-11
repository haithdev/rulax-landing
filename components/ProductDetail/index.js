/* eslint-disable @next/next/no-img-element */
import React from "react";
import GalleryImage from "../GalleryImage";
import Shipping from "./Shipping";
import Content from "./Content";
const propTypes = {};

const ProductDetail = ({}) => {
  //! State

  //! Function

  //! Render
  return (
    <section className="section mt-3 mb-lg-4 mb-3 mb-sm-0">
      <div className="container">
        <div className="section wrap-padding-15 wp_product_main m-0">
          <div className="details-product lg:p-3">
            {/* Image */}
            <div className="row m-sm-0">
              <div className="product-detail-left product-images bg-white py-3 col-12 col-lg-6 col-xl-4 col-lg-6">
                <GalleryImage />
              </div>
              {/* Content */}
              <Content />
              {/* Shipping */}
              <Shipping />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductDetail.propTypes = propTypes;
export default ProductDetail;
