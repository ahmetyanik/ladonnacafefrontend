import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../public/Footer";
import Header from "../public/Header";

const Anasayfa = (props) => {
  const [urunlerState, seturunlerState] = useState([]);

  console.log("urunler", urunlerState);

  function tumUrunleriAl() {
    axios
      .get("http://localhost:5000/api/tumurunler")
      .then(function (gelenVeriler) {
        seturunlerState(gelenVeriler.data);
      });
  }

  useEffect(tumUrunleriAl, []);

  return (
    <div class="Anasayfa-component">
      <div>
        <div style={{ minHeight: "100vh" }}>
          <Header/>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Anasayfa;
