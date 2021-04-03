import React from "react";
import { useLocation } from "react-router";
import resim from "C:/Users/ahmet/Desktop/WEBDEV/VisualStudio/La Donna2/ladonna/client/src/resimler/logo5.jpg";

const Admin_LeftMenu = () => {
  return (
    <aside className="left-sidebar pl-3 pr-3 mt-3 " data-sidebarbg="skin6">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            <li>
              <div className="user-profile d-flex no-block dropdown m-t-20">
                <div className="user-pic">
                <h3 className="m-b-0  font-small">La Donna</h3>
                </div>
                <div className="user-content hide-menu m-l-10">
                  <a
                    href="javascript:void(0)"
                    className=""
                    id="Userdd"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    
                  </a>
                  
                </div>
              </div>
            </li>
            <li className="p-15 m-t-10">
              <a
                href="/admin/urun-ekle"
                className="btn btn-block create-btn text-white no-block d-flex align-items-center"
              >
                <i className="fa fa-plus-square"></i>
                <span className="hide-menu m-l-5 p-2">Ürün Ekle</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className={`sidebar-link waves-effect waves-dark sidebar-link  pl-0 ml-0 ${
                  window.location.href.includes("/admin/anasayfa") &&
                  "active text-info"
                }`}
                href="/admin/anasayfa"
                aria-expanded="false"
              >
                <i className="mdi mdi-view-dashboard"></i>
                <span className="hide-menu">Anasayfa</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className={`sidebar-link waves-effect waves-dark sidebar-link  pl-0 ml-0 ${
                  window.location.href.includes("/admin/urunler") &&
                  "active text-info"
                }`}
                href="/admin/urunler"
                aria-expanded="false"
              >
                <i className="mdi mdi-account-network"></i>
                <span className="hide-menu">Ürünler</span>
              </a>
            </li>
            
            <li className="sidebar-item">
              <a
                className={`sidebar-link waves-effect waves-dark sidebar-link  pl-0 ml-0 ${
                  window.location.href.includes("/admin/kategoriler") &&
                  "active text-info"
                }`}
                href="/admin/kategoriler"
                aria-expanded="false"
              >
                <i className="mdi mdi-border-all"></i>
                <span className="hide-menu">Kategoriler</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className={`sidebar-link waves-effect waves-dark sidebar-link  pl-0 ml-0 ${
                  window.location.href.includes("/admin/kullanicilar") &&
                  "active text-info"
                }`}
                href="/admin/kullanicilar"
                aria-expanded="false"
              >
                <i className="mdi mdi-face"></i>
                <span className="hide-menu">Kullanıcılar</span>
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Admin_LeftMenu;
