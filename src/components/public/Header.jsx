import React, { useEffect, useState } from "react";
import resim from "C:/Users/ahmet/Desktop/WEBDEV/VisualStudio/La Donna2/ladonna/client/src/resimler/logo1.jpg";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

const Header = (props) => {
  
  const parametreler = useParams();
  const query = new URLSearchParams(useLocation().search);
  const [kategoriler, setKategoriler] = useState([]);

 

  function kategorileriAl() {
    setKategoriler([]);
    axios
      .get("http://localhost:5000/api/kategori_liste")
      .then(function (gelenVeri) {
        setKategoriler(gelenVeri.data);
      });
  }

  useEffect(kategorileriAl, []);

  return (
    <div>
      <nav
        style={{ width: "100%" }}
        
        className={
          parametreler.kategori_url === "kaffee"
          ? "navbar navbar-expand-lg navbar-dark arkaplan_header_kaffee":""||
          parametreler.kategori_url === "eis"
          ? "navbar navbar-expand-lg navbar-dark arkaplan_header_eis":""||
          parametreler.kategori_url === "kalte_getränke"
          ? "navbar navbar-expand-lg navbar-light arkaplan_header_kalte ":""||
          parametreler.kategori_url === "heiße_getränke"
          ? "navbar navbar-expand-lg navbar-dark arkaplan_header_heiße ":""||
          parametreler.kategori_url === "organische_produkte"
          ? "navbar navbar-expand-lg navbar-dark arkaplan_header_organische ":"navbar navbar-expand-lg navbar-light"
      }
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              className="rounded-pill"
              style={{ width: "15vh",borderRadius:"50%" }}
              src={resim}
            ></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0 font">             

              {
                kategoriler.map(function(durum){
                  return <li className="nav-item">                               
                  <a
                  href={`/kategori/${durum.kategori_url}`}
                  className="font nav-link active golge_header"
                  >
                  {durum.kategori_isim}
                 
                </a>
                </li>
                })
                
              }           
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
