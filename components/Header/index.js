import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = (props) => {
  const authReducer = useSelector((state) => state.authReducer);

  const isLogin = authReducer?.auth?.isLogin;

  return (
    <header className="header header_menu">
      <div className="mid-header wid_100 d-flex align-items-center">
        <div className="container ">
          <div className="row align-items-center justify-content-center">
            <div className="col-6 col-lg-2 col-xl-3">
              <img
                className="img-fluid"
                src="https://bizweb.dktcdn.net/100/475/818/themes/893130/assets/logo.png?1704711517820"
                alt="logo Rulax"
                width="209"
                height="56"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
