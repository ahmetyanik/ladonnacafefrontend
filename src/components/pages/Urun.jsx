import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Urun(props) {
  const [urunlerState, seturunlerState] = useState([]);

  return (
    <div className="container ">
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12">
          <div
            class="card-radius text-golge align-middle"
            style={{
              height: "70vh",
              backgroundImage: `url(${props.resim})`,
              backgroundSize: "cover",
              maxWidth: "100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="col-1 my-3 "></div>

        <div className="col-lg-5 col-sm-12 d-flex align-items-center">
          <div>
            <b>
              <h3 className="text-dark font">{props.isim}</h3> <img src=""/>
            </b>
            <p className="text-dark mt-5 line-height"><span className="font">Zutaten</span><br/>{props.aciklama}</p>
            <i>
              <p className="text-dark mt-5 line-height">
                Alerjenler: {props.alerjenler}
              </p>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Urun;
