import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Admin_Header from "../public/Admin_Header";
import Admin_LeftMenu from "../public/Admin_LeftMenu";
import Admin_UserList_One from "../public/Admin_UserList_One";

const AdminUserListPage = () => {
  const [kullanicilar, setKullanicilar] = useState([]);
  const [sabitArray, setSabitArray] = useState([]);

  function kullanicilariAl() {
    axios
      .get("http://localhost:5000/admin/api/tum_kullanicilar", {
        withCredentials: true,
      })
      .then(function (gelenVeri) {
        setKullanicilar(gelenVeri.data);
        setSabitArray(gelenVeri.data);
      });
  }

  useEffect(kullanicilariAl, []);

  function kullaniciAra(event) {
    var arananKelime = event.target.value;
    var bosArray = sabitArray.filter(function (bakilan) {
      return (
        bakilan.isim.toLowerCase().includes(arananKelime.toLowerCase()) ||
        bakilan.soyisim.toLowerCase().includes(arananKelime.toLowerCase()) ||
        bakilan.email.toLowerCase().includes(arananKelime.toLowerCase())
      );
    });

    setKullanicilar(bosArray);
  }

  function kullaniciOlustur(event) {
    alert(event.target.password1.value);
    axios
      .post("http://localhost:5000/api/kullanici/olusturma", {
        
        isim: event.target.isim.value,
        soyisim: event.target.soyisim.value,
        email: event.target.email.value,
        rol: "admin",
        engel: 0,
        sifre:event.target.password1.value,
      })
      .then(function (gelenVeri) {
        setKullanicilar(function (oncekiVeriler) {
          return [...oncekiVeriler, gelenVeri.data];
        });
        toast.success("Kullanici oluşturuldu.");
      });

    event.preventDefault();
    event.target.reset();
  }
  console.log(kullanicilar);

  function sifreKontrol(event){

 


    event.preventDefault();
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
              <div className="col-9">
                <h4 className="page-title">Kullanıcı Listesi</h4>
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
                        Tüm Kullanıcılar
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="col-3">
                <div class="ml-auto">
                  <div class="dl">
                    <input
                      onChange={kullaniciAra}
                      class="form-control mr-sm-2"
                      type="search"
                      placeholder="İsim Giriniz"
                      aria-label="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <main role="main" className="col bg-white mt-3">
              <table class="table">
                <caption>Kullanıcı Listesi</caption>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">İsim Soyisim</th>
                    <th scope="col">E-Mail</th>
                    <th scope="col">İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  {kullanicilar.map(function (kullanici, index) {
                    return (
                      <Admin_UserList_One
                        key={index + 1}
                        index={index + 1}
                        id={kullanici._id}
                        isim={kullanici.isim}
                        soyisim={kullanici.soyisim}
                        email={kullanici.email}
                        engel={kullanici.engel}
                      />
                    );
                  })}
                </tbody>
              </table>
            </main>
            <form onChange={sifreKontrol} onSubmit={kullaniciOlustur} className="p-3 m-3 bg-light">
              Yönetici Ekle
              <div className="form-row mt-2">
                <div className="form-group col-md-5">
                  <input
                  required
                    type="text"
                    className="form-control"
                    id="isim"
                    name="isim"
                    placeholder="İsim giriniz"
                  />
                </div>
                <div className="form-group col-md-5">
                  <input
                  required
                    type="text"
                    className="form-control"
                    id="soyisim"
                    name="soyisim"
                    placeholder="Soyisim giriniz"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-10">
                  <input
                  required
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="E-mail giriniz"
                  />
                </div>
                <div className="form-group col-md-5">
                  <input
                  required
                    type="text"
                    className="form-control"
                    id="password1"
                    name="password1"
                    placeholder="Sifre Belirleyiniz"
                  />
                </div>
                <div className="form-group col-md-5">
                  <input
                  required
                    type="text"
                    className="form-control"
                    id="password2"
                    name="password2"
                    placeholder="Sifreyi Tekrar giriniz"
                  />
                </div>

               
              
                </div>

                <div className="form-group col-md-1 d-flex align-items-end justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    Kaydet
                  </button>
                </div>
             
            </form>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default AdminUserListPage;
