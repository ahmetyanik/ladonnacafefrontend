import axios from "axios";
import React, { useEffect, useState } from "react";
import Admin_Categories_One from "../public/Admin_Categories_One";
import Admin_Header from "../public/Admin_Header";
import Admin_LeftMenu from "../public/Admin_LeftMenu";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminCategoriesPage = () => {
  const [kategoriler, setKategoriler] = useState([]);

  console.log("kategoriler", kategoriler);
  console.log("length",kategoriler.length);

  function kategorileriAl() {
    setKategoriler([]);
    axios
      .get("http://localhost:5000/api/kategori_liste")
      .then(function (gelenVeri) {
        setKategoriler(gelenVeri.data);
      });
  }

  useEffect(kategorileriAl, []);

  function kategoriOlustur(event) {
    
    axios
      .post("http://localhost:5000/api/kategori_bireysel/olustur", {
        isim: event.target.isim.value,
        url: event.target.isim.value.trim().toLowerCase().replace(/ /g,"_"),
        sira:(kategoriler.length)+1
        
        
      })
      .then(function (gelenVeri) {
        setKategoriler(function (oncekiVeriler) {
          return [...oncekiVeriler, gelenVeri.data];
        });
        toast.success("Kategori oluşturuldu.");
      });

    event.preventDefault();
    event.target.reset();
  }

  return (
    <React.StrictMode>
      <ToastContainer />
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
              <div className="col-9">
                <h4 className="page-title">Kategori Listesi</h4>
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
                        Tüm Kategoriler
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="col-3">
                <div className="ml-auto"></div>
              </div>
            </div>
          </div>
          <div className="row ">
            <main role="main" className="col bg-white mt-3">
              <form onSubmit={kategoriOlustur} className="p-3 m-3 bg-light">
                Kategori Ekle
                <div className="form-row mt-2">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="isim"
                      placeholder="Kategori ismi giriniz"
                    />
                  
                    
                  </div>
                  <button type="submit" className="btn btn-primary">Kaydet</button>
                  
                </div>
                
                

              </form>

              

              

              
              <div className="bg-dark text-end">

            
             
              {kategoriler.map(function (kategori, index) {
                  
                  return (
                    <span className="mr-4 text-light">
                    {kategori.kategori_isim}
                    </span>
                  ) 
              
              })}

              </div>

              
      
              <br/>

              {kategoriler.map(function (kategori, index) {
                return (                
                  
                  <Admin_Categories_One    
                                
                    kategoriGuncellendi={kategorileriAl}
                    key={index}
                    id={kategori._id}
                    index={index + 1}
                    isim={kategori.kategori_isim}
                    url={kategori.kategori_url}
                    aciklama={kategori.kategori_aciklama}
                    kategori_sira={kategori.kategori_sira}
                  />
                );
              })}
              
            </main>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default AdminCategoriesPage;
