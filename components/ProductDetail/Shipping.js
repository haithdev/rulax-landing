import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Shipping = (props) => {
  return (
    <div className="col-12 col-xl-3 pl-0 pl-xl-3 product-right pr-0">
      <div className="product-policises-wrapper">
        <ul className="product-policises list-unstyled card border-0 p-3 m-0">
          <li className="media">
            <div className="mr-2">
              <img
                className="img-fluid "
                width="24"
                height="24"
                src="https://bizweb.dktcdn.net/100/475/818/themes/893130/assets/policy_product_image_1.png?1704711517820"
                alt="Giao hàng nhanh chóng"
              />
            </div>
            <div className="media-body">Giao hàng nhanh chóng</div>
          </li>
          <li className="media">
            <div className="mr-2">
              <img
                className="img-fluid "
                width="24"
                height="24"
                src="https://bizweb.dktcdn.net/100/475/818/themes/893130/assets/policy_product_image_2.png?1704711517820"
                alt="Giảm 35.000 VNĐ nếu khách hàng check-in tại cửa hàng"
              />
            </div>
            <div className="media-body">
              Giảm 35.000 VNĐ nếu khách hàng check-in tại cửa hàng
            </div>
          </li>
          <li className="media">
            <div className="mr-2">
              <img
                className="img-fluid "
                width="24"
                height="24"
                src="https://bizweb.dktcdn.net/100/475/818/themes/893130/assets/policy_product_image_3.png?1704711517820"
                alt="Miễn phí giao hàng khi thanh toán chuyển khoản"
              />
            </div>
            <div className="media-body">
              Miễn phí giao hàng khi thanh toán chuyển khoản
            </div>
          </li>
          <li className="media">
            <div className="mr-2">
              <img
                className="img-fluid "
                width="24"
                height="24"
                src="https://bizweb.dktcdn.net/100/475/818/themes/893130/assets/policy_product_image_4.png?1704711517820"
                alt="Đổi trả miễn phí trong 7 ngày"
              />
            </div>
            <div className="media-body">Đổi trả miễn phí trong 7 ngày</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shipping;
