import React from "react";
import ProductDetail from "components/ProductDetail";
import Header from "components/Header";
import Description from "../components/Description";
import { CountProvider } from "../context/CountProductContext";
import Review from "../components/Review";

export default function Index() {
  return (
    <CountProvider>
      {/* SEO */}
      <title>
        Đệm Massage toàn thân hồng ngoại RULAX đa điểm rung cao cấp phiên bản
        2023- Chất liệu da cao cấp
      </title>
      <meta
        name="description"
        content="Đệm Massage Toàn Thân Hồng Ngoại Đa Điểm Rung Cao Cấp. 🛑 CHÍNH SÁCH BẢO HÀNH Hãy tin tưởng và an tâm khi mua sắm tại gian hàng chính hãng, bạn sẽ nhận được các chính sách sau: 👉Bảo hành 12 tháng, đổi mới 15 ngày 👉Đổi, trả hàng nếu sản phẩm không đúng như mô tả 👉Đổi mới 1-1 nếu sản phẩm phát sinh lỗi do nhà sản xuất"
      ></meta>
      <meta
        name="keywords"
        content="Đệm Massage toàn thân hồng ngoại RULAX đa điểm rung cao cấp phiên bản 2023- Chất liệu da cao cấp, Massage và trị liệu, Sản phẩm mới, Trang chủ, Sản phẩm khuyến mãi, Rulax, rulax.vn"
      ></meta>
      <Header />
      <ProductDetail />
      <Description />
      <Review />
    </CountProvider>
  );
}
