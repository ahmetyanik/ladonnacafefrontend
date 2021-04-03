import axios from "axios";
import React, { useEffect, useState } from "react";

const Admin_Categories_One = (props) => {
  const [durum, setDurum] = useState(false);
  const [kategoriler, setKategoriler] = useState([]);

  

  function kategorileriAl() {
    axios
      .get("http://localhost:5000/api/kategori_liste")
      .then(function (gelenVeri) {
        setKategoriler(gelenVeri.data);
      });
  }

  useEffect(kategorileriAl, []);

  /*
    false : gizli
    true  : açık
   */

  const [aciklama, setAciklama] = useState("");

  function acKapat() {
    setDurum(!durum);
    setAciklama(props.aciklama);
  }

  


  function sirala(event) {
 
    axios
      .patch(
        "http://localhost:5000/api/kategori_bireysel/guncelle?id=" + props.id,

        {
          kategori_sira: event.target.deger.value
        }
      
      )
      .then(function (gelenVeri) {
        props.kategoriGuncellendi();
        setDurum(false);
      });
  }



  function kategoriyiSil() {
    axios
      .delete("http://localhost:5000/api/kategori_bireysel/sil?id=" + props.id)
      .then(function (gelenVeri) {
        props.kategoriGuncellendi();
        setDurum(false);
      });
  }

  return (
    
    <div className="m-3">
    
    
      <div  className="row ml-1 mr-1 pb-2 border-bottom d-flex">
      
         
         
      <div className="d-flex">
      <form onSubmit={sirala} className="d-flex ">
          <span className="d-flex mr-3 p-2 ">{props.isim}:</span>    <input  className="col-sm-2 mr-5 d-flex" placeholder={props.kategori_sira} name="deger"></input>
        
          <button type="submit" className="btn btn-warning text-dark d-flex">Sira Numarasi Ver</button>
        
       </form>
        
      </div>
      
 
        <div className="d-flex ">
      <button onClick={acKapat} className={durum===false?"btn btn-danger col-sm-2":"btn btn-success col-sm-2"}>{durum===false?"Kategoriyi Sil":"Kategoriyi Silme"}</button>
        <div
          className={`p-3 mt-2 bg-white text-dark ${
            durum === false && "d-none"
          }`}
        >
          {props.isim} adli kategoriyi silmekten emin misiniz?
          <div className="form-row mt-2">
            <div className="form-group col-md-6">
              <input
                defaultValue={props.isim}
                disabled
                type="text"
                className="form-control"
                id="inputEmail4"
                name="isim"
                placeholder="İsim giriniz"
              />
            </div>
            <div className="form-row">         
            <div className="form-group col-md-1 d-flex align-items-end justify-content-start">
              <button
                onClick={kategoriyiSil}
                type="submit"
                className="btn btn-danger"
              >
                Sil
              </button>
            </div>
          </div>
        
          </div>

          
        </div>
        
      </div>
      
           

      </div>
   
    </div>
  );
};

export default Admin_Categories_One;
