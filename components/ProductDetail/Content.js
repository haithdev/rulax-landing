/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useCount } from "../../context/CountProductContext";
import useToggleDialog from "../../hooks/todos/useToggleDialog";
import CheckoutModal from "./CheckoutModal";
import moment from "moment";

const Content = (props) => {
  const { count, increment, decrement } = useCount();

  const {
    shouldRender: shouldRenderCheckout,
    open: openCheckoutModal,
    toggle: toggleCheckoutmodal,
  } = useToggleDialog();

  const product = {
    name: "Đệm Massage toàn thân hồng ngoại RULAX đa điểm rung cao cấp phiên bản 2023- Chất liệu da cao cấp",
    brand: "Rulax",
    productCode: "Đang cập nhật",
    price: "1.200.000₫",
    priceDefault: "1.610.000₫",
    sale: "-25%",
    priceSale: "410.000₫",
    phoneNumber: "0989354832",
    timeCall: "(7:30 - 22:00)",
  };

  const descriptionProduct = [
    "Vùng cơ thể: Toàn thân",
    "Trọng lượng: 3kg",
    "Thiết bị điện: Có",
    "Hạn bảo hành: 12 tháng",
    "Loại bảo hành: Bảo hành nhà cung cấp",
    "Loại thiết bị massage: Massage toàn thân",
  ];

  const dataFlashSale = {
    flashSaleColl: "san-pham-khuyen-mai",
    type: "hours",
    dateStart: "30/11/2020",
    dateFinish: "1",
    hourStart: "00:00",
    hourFinish: "24",
    activeDay: "7",
    finishAction: "show",
    finishLabel: "Chương trình đã kết thúc",
    percentMin: "30",
    percentMax: "90",
    maxInStock: "100",
    useSoldQuantity: true,
    useTags: true,
    timestamp: new Date().getTime(),
    openingText: "Vừa mở bán",
    soldText: "Đã bán [soluong] sản phẩm",
    outOfStockSoonText:
      "<img src='//bizweb.dktcdn.net/100/475/818/themes/893130/assets/fire-icon.svg?1704711517820' /> Sắp cháy hàng",
  };
  // Flash Sale
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const now = moment();
      const endOfDay = moment().endOf("day");
      const difference = moment.duration(endOfDay.diff(now));

      const hours = difference.hours();
      const minutes = difference.minutes();
      const seconds = difference.seconds();

      setCountdown({
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      });
    };

    calculateCountdown(); // Tính toán lần đầu khi component được render

    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="col-xs-12 col-lg-6 col-xl-5 details-pro bg-white py-3 mt-3 mt-lg-0 px-3">
      <h1 className="title-product">{product.name}</h1>
      <div className="form_background margin-bottom-0 MultiFile-intercepted">
        <div className="group-status">
          <span className="first_status mr-2">
            <span style={{ marginRight: "4px" }}>Thương hiệu:</span>
            <span className="status_name">
              <a target="_blank" className="text-primary" title="Rulax">
                {product.brand}
              </a>
            </span>
          </span>

          <span className="first_status product_sku">
            <span style={{ marginRight: "2px" }}>Mã sản phẩm: </span>
            <span
              className="status_name product-sku"
              itemProp="sku"
              content="Đang cập nhật"
            >
              {product.productCode}
            </span>
          </span>
        </div>

        <div className="flashsale">
          <div className="flashsale__header d-flex justify-content-between">
            <div className="flashsale__title text-center text-md-left ">
              <h5>FLASH SALE</h5>
              <span className="ega-dot">
                <span className="ega-ping"></span>
              </span>
            </div>
            <div className="flashsale__countdown-wrapper">
              <span
                className="flashsale__countdown-label mr-2 d-none"
                style={{ display: "inline" }}
              >
                Kết thúc sau
              </span>
              <div
                className="flashsale__countdown"
                data-countdown-type="hours"
                data-countdown=""
              >
                <div className="ega-badge-ctd">
                  <div>
                    <div className="ega-badge-ctd__item ega-badge-ctd__h">
                      {countdown.hours}
                    </div>
                    <span>Giờ</span>{" "}
                  </div>{" "}
                  <div className="ega-badge-ctd__colon"> : </div>
                  <div>
                    <div className="ega-badge-ctd__item  ega-badge-ctd__m">
                      {countdown.minutes}
                    </div>
                    <span>Phút</span>
                  </div>{" "}
                  <div className="ega-badge-ctd__colon"> : </div>
                  <div>
                    <div className="ega-badge-ctd__item ega-badge-ctd__s">
                      {countdown.seconds}
                    </div>
                    <span>Giây</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flashsale__product ">
            <div
              className="flashsale__item pb-1"
              data-pd-id="29414964"
              data-inventory-quantity="0"
              data-management="true"
              data-available="true"
              data-max-stock="100"
            >
              <div className="flashsale__bottom px-0">
                <div className="flashsale__progressbar  style2 ">
                  <div className="flashsale__label">
                    <img
                      src="https://bizweb.dktcdn.net/100/475/818/themes/893130/assets/fire-icon.svg?1704711517820"
                      alt="sap chay hang"
                    />{" "}
                    Sắp cháy hàng
                  </div>

                  <div
                    className="flashsale___percent"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="price-box">
          <span className="special-price">
            <span className="price product-price">{product.price}</span>
          </span>
          <span className="old-price">
            <del className=" product-price-old sale">
              {product.priceDefault}
            </del>
          </span>

          <div className="label_product">{product.sale}</div>
          <div className="save-price">
            (Tiết kiệm: <span>{product.priceSale}</span>)
          </div>
        </div>

        <div className="form-product pt-sm-2">
          <div className="box-variant clearfix d-none">
            <input type="hidden" name="variantId" value="80518028" />
          </div>

          <div className="product-summary">
            <div className="rte">
              <div
                className="product-summary-content"
                style={{ fontSize: "14px" }}
              >
                {descriptionProduct.map((item, index) => {
                  return <p key={index + item}>{item}</p>;
                })}
              </div>
            </div>
          </div>

          <div className="form_button_details w-100">
            <div className="form_product_content type1 ">
              <div className="soluong soluong_type_1 show">
                <label>Số lượng:</label>
                <div className="custom input_number_product custom-btn-number ">
                  <button
                    className="btn btn_num num_1 button button_qty"
                    type="button"
                    style={{ height: `calc(1.5em + 0.75rem + 2px)` }}
                    onClick={() => decrement()}
                    disabled={count === 1}
                  >
                    -
                  </button>
                  <input
                    style={{ borderRadius: 0 }}
                    type="text"
                    id="qtym"
                    name="quantity"
                    value={count}
                    maxLength="3"
                    className="form-control prd_quantity pd-qtym"
                  />
                  <button
                    className="btn btn_num num_2 button button_qty"
                    onClick={() => increment()}
                    type="button"
                    style={{ height: `calc(1.5em + 0.75rem + 2px)` }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="button_actions">
                <button
                  onClick={() => toggleCheckoutmodal()}
                  className="btn btn_base buynow"
                >
                  <span>MUA NGAY</span>
                  <span>Giao hàng tận nơi hoặc nhận tại cửa hàng</span>
                </button>
              </div>

              <p className="product-hotline mb-0 text-center">
                Gọi đặt mua{" "}
                <a href={`tel:${product.phoneNumber}`}>{product.phoneNumber}</a>{" "}
                {product.timeCall}
              </p>
            </div>
          </div>
        </div>
      </div>
      {shouldRenderCheckout && (
        <CheckoutModal modal={openCheckoutModal} toggle={toggleCheckoutmodal} />
      )}
    </div>
  );
};

export default Content;
