import axios from "axios";
import React, { useEffect } from "react";
import resim from "C:/Users/ahmet/Desktop/WEBDEV/VisualStudio/La Donna2/ladonna/client/src/resimler/logo5.jpg";

const Admin_Header = () => {
  async function girisKontrol() {
    await axios
      .get("http://localhost:5000/api/kullanici/giriskontrol", {
        withCredentials: true,
      })
      .then(function (gelenVeri) {
        if (gelenVeri.data.sonuc === true && gelenVeri.data.rol === "admin") {
          // işleme gerek yok.
        } else {
          window.location.href = "/admin/giris";
        }
      });
  }

  useEffect(girisKontrol, []);

  function cikisYap() {
    axios
      .get("http://localhost:5000/api/kullanici/cikis", {
        withCredentials: true,
      })
      .then(function (gelenVeri) {
        window.location.href = "/admin/giris";
      });
  }

  return (
    <header className="topbar" data-navbarbg="skin5">
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        <div className="navbar-header" data-logobg="skin5">
          <a className="navbar-brand" href="/">
            <b className="">
              <img
                src={resim}
                alt="homepage"
                className="light-logo"
                height="50rem"
              />
            </b>
          </a>
          <a
            className="nav-toggler waves-effect waves-light d-block d-md-none"
            href="javascript:void(0)"
          >
            <i className="ti-menu ti-close"></i>
          </a>
        </div>
        <div
          className="navbar-collapse collapse "
          id="navbarSupportedContent"
          data-navbarbg="skin5 "
        >
          <ul className="navbar-nav float-left mr-auto"></ul>
          <ul className="navbar-nav float-right">
            <li className="nav-item dropdown">
              <button onClick={cikisYap} className="btn btn-danger p-2 m-1">
                <i className="ti-user m-r-5 m-l-5"></i>
                Çıkış Yap
              </button>

              <div className="dropdown-menu dropdown-menu-right user-dd animated"></div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Admin_Header;
