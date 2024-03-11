import React from "react";

const propTypes = {};

const Review = (props) => {
  //! State

  const reviews = [
    {
      id: 1,
      name: "Như Quỳnh",
      content: "máy làm quà tặng hợp lí. mua cho ba ưng quá trời ạ",
      time: "14:24 07/12/2023",
      rate: 5,
    },
    {
      id: 2,
      name: "Nguyễn Ngọc Huyền",
      content:
        "Rất tốt. Phần chườm ấm hiệu quả nhanh, nóng ấm thích lắm shop ạ. Mình mua cho ba mẹ xài tuổi già rồi chân tay đi lại đau nhức hi vọng là nó sẽ bền và giảm đau được nhiều. Shop cẩn thận gọi tư vấn và hướng dẫn mình đến nơi đến chốn, cảm ơn shop, chúc thương hiệu massage RULAX sẽ có thể phát triển tốt hơn, mình sẽ giới thiệu cho mn xung quanh nhé",
      time: "14:19 31/10/2023",
      rate: 4,
    },
    {
      id: 3,
      name: "Minh Quân",
      content: "Sản phẩm đc!",
      time: "12:31 13/2/2023",
      rate: 5,
    },
  ];

  //! Function
  const Star = ({ rate = 5 }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          data-alt={i}
          className={i <= rate ? "star-on-png" : ""}
          title="gorgeous"
        />
      );
    }
    return (
      <div
        className="rulax-product-reviews-star"
        data-score={rate}
        data-number={5}
      >
        {stars}
      </div>
    );
  };

  const Action = ({ time = "" }) => {
    return (
      <div className="rulax-review-actions" style={{ color: "#80BB35" }}>
        <ul>
          <li className="rulax-review-reply">
            <a
              onClick="BPR.showReply(this, 512053);return false"
              title="Gửi trả lời"
              href="javascript: void(0);"
            >
              Gửi trả lời
            </a>
          </li>
          <li className="rulax-review-useful">
            <a
              onClick="BPR.likeComment(512053, 'comment');return false"
              title="Hữu ích"
              href="javascript: void(0);"
            >
              <svg
                className="icon-useful"
                version="1.1"
                viewBox="0 0 30 30"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path d="M4,25h2l0,0c1.281,1.281,3.017,2,4.828,2H21l2-2v-4l0.5-10H14c0,0,1-3.266,1-4c0-2.251,0-5-3-5c-1,0-1,0-1,0l-0.501,3.491  L8.132,9.894C7.435,11.191,6.082,12,4.609,12H4V25z" />
                <circle cx="23.5" cy="13.5" r="2.5" />
                <circle cx="22.5" cy="21.5" r="2.5" />
                <circle cx="23.5" cy="17.5" r="2.5" />
                <circle cx={21} cy={25} r={2} />
                <circle cx={21} cy={25} r={2} />
              </svg>
              Hữu ích
            </a>
          </li>
          <li>
            <span className="rulax-review-time" itemProp="datePublished">
              {time}
            </span>
          </li>
        </ul>
      </div>
    );
  };

  //! Render
  return (
    <section className="section">
      <div className="container">
        <div className="card">
          <div className="title_module heading-bar d-flex justify-content-between align-items-center">
            <h2 className="bf_flower heading-bar__title">ĐÁNH GIÁ SẢN PHẨM</h2>
          </div>
        </div>
        <div>
          <div id="rulax-product-reviews" className="rulax-product-reviews">
            <div>
              <div id="rulax-product-reviews-sub">
                <div>
                  <div id="bpr-list" className="rulax-product-reviews-list">
                    {reviews.map((item) => {
                      return (
                        <div className="rulax-review" key={item.id}>
                          <div className="rulax-review-header">
                            {/* Name */}
                            <span
                              className="rulax-review-author"
                              itemProp="author"
                            >
                              {item.name}
                            </span>
                            {/* Star */}
                            <Star rate={item.rate} />
                          </div>
                          {/* Content */}
                          <div className="rulax-review-body">
                            <span
                              className="rulax-review-content-body"
                              itemProp="description"
                            >
                              {item.content}
                            </span>
                          </div>
                          {/* Action */}
                          <Action time={item.time} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Review.propTypes = propTypes;
export default Review;
