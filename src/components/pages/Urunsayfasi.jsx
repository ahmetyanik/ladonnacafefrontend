import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../public/Footer.jsx";
import Header from "../public/Header.jsx";
import Urun from "./Urun.jsx";

function Urunsayfasi(props) {
  const parametreler = useParams([]);
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

  console.log("parametre-isim",parametreler.urun_adi);

  function urunleriAl() {
    var adres =
      "http://localhost:5000/urun/" +
      parametreler.kategori_url +
      "/" +
      parametreler.urun_adi;

  

    axios.get(adres).then(function (gelenVeri) {
      setUrunler(gelenVeri.data);
      console.log(gelenVeri.data[0]);
    });
  }

  useEffect(urunleriAl, []);

  console.log(urunler);

  return (
    <div>
    <div className="renk" style={{ minHeight: "100vh" }}>
      <Header />     

      {urunler.map(function (urun) {
          return (
            <Urun
              key={urun._id}
              id={urun._id}
              isim={urun.isim}
              kategori={urun.kategori}
              kategori_url={urun.kategori_url}
              resim={urun.resim}
              aciklama={urun.aciklama}
              fiyat={urun.fiyat}
              alerjenler={urun.alerjenler}

            />
          );
        })}



      
    </div>
    <Footer />
    </div>
  );
}

export default Urunsayfasi;
