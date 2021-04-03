import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Anasayfa from "./components/pages/Anasayfa";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import CategoryPage from "./components/pages/CategoryPage";
import Urunsayfasi from "./components/pages/Urunsayfasi";
import AdminHomePage from "./components/pages/AdminHomePage";
import AdminAddProductPage from "./components/pages/AdminAddProductPage";
import AdminProductListPage from "./components/pages/AdminProductListPage";
import AdminCategoriesPage from "./components/pages/AdminCategoriesPage";
import AdminEditProductPage from "./components/pages/AdminEditProductPage";
import AdminLoginPage from "./components/pages/AdminLoginPage";
import AdminUserListPage from "./components/pages/AdminUserListPage";

ReactDOM.render(
  <CookiesProvider>
    <Router>
      <Route exact path="/">
        <Anasayfa />
      </Route>
      <Route path="/kategori/:kategori_url">
        <CategoryPage />
      </Route>
      <Route path="/urun/:kategori_url/:urun_adi">
        <Urunsayfasi />
      </Route>
      <Route path="/admin/anasayfa">
        <AdminHomePage />
      </Route>
      <Route path="/admin/urun-ekle">
        <AdminAddProductPage />
      </Route>
      <Route path="/admin/urunler">
        <AdminProductListPage />
      </Route>
      <Route path="/admin/kategoriler">
        <AdminCategoriesPage />
      </Route>
      <Route path="/admin/urun_duzenle">
        <AdminEditProductPage />
      </Route>
      <Route path="/admin/giris">
        <AdminLoginPage />
      </Route>
      <Route path="/admin/kullanicilar">
        <AdminUserListPage />
      </Route>
    </Router>
  </CookiesProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
