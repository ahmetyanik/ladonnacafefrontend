import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Admin_Header from "../public/Admin_Header.jsx";
import Admin_LeftMenu from "../public/Admin_LeftMenu.jsx";

const AdminAddProductPage = () => {
  const el = useRef();

  const [progress, setProgress] = useState(0);
  const [kategoriler, setKategoriler] = useState([]);
  const [dosya1, setDosya1] = useState("");

  console.log("dosya1",dosya1);

  function kategorileriAl() {
    axios
      .get("http://localhost:5000/api/kategori_liste")
      .then(function (gelenVeri) {
        setKategoriler(gelenVeri.data);
        console.log("kategoriler",gelenVeri.data);
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

  console.log("dosya1",dosya1);

  function uploadFile(event) {
    const formData = new FormData();
    formData.append("isim", event.target.isim.value);
    formData.append("aciklama", event.target.aciklama.value);
    formData.append("alerjenler", event.target.alerjenler.value);
    formData.append(
      "kategori",
      event.target.kategori[event.target.kategori.selectedIndex].textContent
    );
    formData.append("kategori_url", event.target.kategori.value);
    formData.append("fiyat", event.target.fiyat.value);

    if (dosya1 !== "") {
      formData.append("dosya1", dosya1);
    }
   

    axios
      .post("http://localhost:5000/admin/api/urunolustur", formData, {
        onUploadProgress: (data) => {
          setProgress(Math.round((100 * data.loaded) / data.total));
        },
      })
      .then(function (gelenVeri) {
        console.log("Kayıt Tamamdır.");
      });

    event.preventDefault();
    event.target.reset();
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
                <h4 className="page-title">Ürün Ekle</h4>
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
                        Ürün Ekle
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="col-7"></div>
            </div>
          </div>
          <div className="row  ">
            <main role="main" className="col  pt-3">
              <div className="p-3 ">
                <form onSubmit={uploadFile}>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="row mb-2">
                        <div className="col">
                          <input
                            required
                            className="form-control"
                            type="text"
                            name="isim"
                            placeholder="Ürün Adi"
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
                              {kategoriler.map(function (kategori) {
                                return (
                                  <option value={kategori.kategori_url}>
                                    {kategori.kategori_isim}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>

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
                          />
                        </div>
                      </div>

                      <textarea
                        placeholder="Icindekiler"
                        required
                        className="form-control mb-2"
                        name="aciklama"
                        rows="3"
                      ></textarea>
                      <textarea
                        placeholder="Alerjenler"
                        required
                        className="form-control mb-2"
                        name="alerjenler"
                        rows="3"
                      ></textarea>
                    </div>

                    <div className="col-md-4 position-relative p-2 bg-light rounded d-flex align-content-between  flex-wrap">
                      <div>
                        <div className="">
                          <div className="col form-control mb-2 p-2 d-flex align-items-center">
                            <span>Fotograf </span>

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
                        </div>
                    
                      
                     
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
                          className="w-100 btn btn-danger mb-2"
                          type="submit"
                          value="Ekle"
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
