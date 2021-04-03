import React from "react";
import Admin_Header from "../public/Admin_Header.jsx";
import Admin_LeftMenu from "../public/Admin_LeftMenu.jsx";
import resim from "C:/Users/ahmet/Desktop/WEBDEV/VisualStudio/La Donna2/ladonna/client/src/resimler/logo4.jpg";


const AdminHomePage = () => {
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
        <Admin_LeftMenu/>
        <Admin_Header />

        <div className="page-wrapper">
          <div className="page-breadcrumb">
            <div className="row align-items-center">
              <div className="col-5">
                <h4 className="page-title">Anasayfa</h4>
                <div className="d-flex align-items-center">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Anasayfa</a>
                      </li>
                     
                    </ol>
                  </nav>
                  
                </div>
                
              </div>
              <div className="col-7"></div>
            </div>
          </div>
          <div className="container-fluid">
          
            <div className="row">
            
            
             
            </div>

            

            <div className="row d-flex justify-content-center">
            <img className="rounded-pill" style={{width:"25rem"}} src={resim}></img>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default AdminHomePage;
