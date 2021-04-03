import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import Admin_Header from "../public/Admin_Header.jsx";
import Admin_LeftMenu from "../public/Admin_LeftMenu.jsx";

const AdminAddProductPage = () => {
  const el = useRef();

  const [progress, setProgress] = useState(0);
  const [kategoriler, setKategoriler] = useState([]);
  const [dosya1, setDosya1] = useState("");

  function kategorileriAl() {
    axios
      .get("http://localhost:5000/api/kategori_liste")
      .then(function (gelenVeri) {
        setKategoriler(gelenVeri.data);
      });
  }

  useEffect(kategorileriAl, []);

  function handleChange(event) {
    setProgress(0);
    const dosya = event.target.files[0];
    const nameDegeri = event.target.name;

    if (nameDegeri === "dosya1") {
      setDosya1(dosya);
    }
  }

  const query = new URLSearchParams(useLocation().search);

  function uploadFile(event) {
    const formData = new FormData();    
    formData.append("id", query.get("id"));
    formData.append("isim", event.target.isim.value);
    formData.append("aciklama", event.target.aciklama.value);
    formData.append("alerjenler", event.target.alerjenler.value);
    formData.append(
      "kategori",
      event.target.kategori[event.target.kategori.selectedIndex].textContent
    );
    formData.append("kategori_url", event.target.kategori.value);
    formData.append("fiyat", event.target.fiyat.value);
    formData.append("res1", res1);

    if (dosya1 !== "") {
      formData.append("dosya1", dosya1);
    }

    axios
      .patch("http://localhost:5000/admin/api/urunguncelle", formData, {
        onUploadProgress: (data) => {
          setProgress(Math.round((100 * data.loaded) / data.total));
        },
      })
      .then(function (gelenVeri) {
        window.location.reload();
      });

    event.preventDefault();
    event.target.reset();
  }

  const [isim, setIsim] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [alerjenler, setAlerjenler] = useState("");
  const [fiyat, setFiyat] = useState("");
  const [kategori, setKategori] = useState("");
  const [res1, setRes1] = useState("");

  console.log();

  function bilgileriAl() {
    axios
      .get("http://localhost:5000/api/urun/detay/" + query.get("id"))
      .then(function (gelenVeri) {
        setIsim(gelenVeri.data[0].isim);
        setKategori(gelenVeri.data[0].kategori);
        setAciklama(gelenVeri.data[0].aciklama);
        setFiyat(gelenVeri.data[0].fiyat);
        setRes1(gelenVeri.data[0].resim);
        setAlerjenler(gelenVeri.data[0].alerjenler);
        
      });
  }
  
  useEffect(bilgileriAl, []);

  function resim1Degistir() {
    setRes1("");
  }

  

  return (
    <React.StrictMode>
      <div
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin5"
        data-sidebartype="full"
        data-sidebar-position="absolute"
        data-header-position="absolute"
        data-boxed-layout="full"
      >
        <Admin_LeftMenu />
        <Admin_Header />

        <div className="page-wrapper">
          <div className="page-breadcrumb">
            <div className="row align-items-center">
              <div className="col-5">
                <h4 className="page-title">Ürün Düzenle</h4>
                <div className="d-flex align-items-center">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/admin/anasayfa">Anasayfa</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Seçili Ürünü Düzenle
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="col-7"></div>
            </div>
          </div>
          <div className="row">
            <main role="main" className="col  pt-3">
              <div className="p-3 ">
                <form onSubmit={uploadFile}>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="row mb-2">
                        <div className="col">
                          <input
                            defaultValue={isim}
                            required
                            className="form-control"
                            type="text"
                            name="isim"
                            placeholder="Başlık"
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-md-6 ">
                          <div className="bg-light p-2 rounded  d-flex align-items-center ">
                            <span class="w-25">Kategori</span>
                            <select
                              name="kategori"
                              class=" w-75 float-right rounded border-light"
                            >
                              {kategori !== undefined &&
                                kategoriler.map(function (bakilan) {
                                  return (
                                    <option
                                      value={bakilan.kategori_url}
                                      selected={
                                        kategori === bakilan.kategori_isim
                                          ? "selected"
                                          : ""
                                      }
                                    >
                                      {bakilan.kategori_isim}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6 mt-sm-2 mt-md-0"></div>
                      </div>
                      <div className="row mb-2">
                        <div className="col">
                          <input
                            required
                            className="form-control"
                            type="number"
                            step="0.01"
                            name="fiyat"
                            placeholder="Fiyat"
                            defaultValue={fiyat}
                          />
                        </div>
                      </div>

                      <textarea
                        placeholder="Icindekiler"
                        required
                        className="form-control mb-2"
                        name="aciklama"
                        rows="3"
                        defaultValue={aciklama}
                      ></textarea>

                      <textarea
                        placeholder="Alerjenler"
                        required
                        className="form-control mb-2"
                        name="alerjenler"
                        rows="3"
                        defaultValue={alerjenler}
                      ></textarea>
                    </div>
                    <div className="col-md-4 position-relative p-2 bg-light rounded d-flex align-content-between  flex-wrap">
                      <div>
                        {res1 === "" || res1 === undefined ? (
                          <div className="col form-control mb-2 p-2 d-flex align-items-center">
                            <span>Resim 1 </span>

                            <input
                              required
                              ref={el}
                              className="pl-2 w-75"
                              name="dosya1"
                              id="dosya1"
                              type="file"
                              onChange={handleChange}
                            />
                          </div>
                        ) : (
                          <img
                            className="m-3"
                            onClick={resim1Degistir}
                            src={res1}
                            width="100px"
                            height="100px"
                            alt=""
                          />
                        )}
                      </div>
                      <div className="w-100">
                        <div class="progress mb-2">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: `${progress}` }}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            {progress} Yüklendi
                          </div>
                        </div>
                        <input
                          className="w-100  btn btn-danger mb-2"
                          type="submit"
                          value="Güncelle"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default AdminAddProductPage;
