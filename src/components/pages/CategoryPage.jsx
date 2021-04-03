import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../public/Footer";
import Header from "../public/Header";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const parametreler = useParams();
  const query = new URLSearchParams(useLocation().search);
  const [urunler, setUrunler] = useState([
    {
      isim: "",
      id: "",
      kategori: "",
      kategori_url: "",
      resim: "",
      aciklama: "",
      fiyat: "",
    },
  ]);

  function urunleriAl() {
    var adres = "http://localhost:5000/kategori/" + parametreler.kategori_url;

    axios.get(adres).then(function (gelenVeri) {
      setUrunler(gelenVeri.data);
    });
  }

  useEffect(urunleriAl, []);

  return (
    <div
      className={
        parametreler.kategori_url === "kaffee"
          ? ""
          : "" || parametreler.kategori_url === "eis"
          ? ""
          : "" || parametreler.kategori_url === "kalte_getränke"
          ? ""
          : "" || parametreler.kategori_url === "heiße_getränke"
          ? ""
          : "" || parametreler.kategori_url === "organische_produkte"
          ? ""
          : ""
      }
    >
      <div style={{ minHeight: "100vh" }} className="">
        <Header />
        <div className="d-flex justify-content-center">
          {console.log("kategori", urunler.kategori)}
          <div className="col-10 ">
            <div className="row ">
              {urunler.map(function (urun) {
                return (
                  <div className="col-md-3 my-4 ">
                    <a
                      class="urunlinki"
                      href={`/urun/${urun.kategori_url}/${urun.isim}`}
                    >
                      <div
                        class="card-banner "
                        style={{
                          height: "50vh",
                          backgroundImage: `url(${urun.resim})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div class="card-body card-padding"> </div>
                        <div class="text-bottom">
                          <h5 class="title">{urun.isim}</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
