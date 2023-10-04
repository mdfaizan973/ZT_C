"use client";
import { useState, useEffect } from "react";
import "./Mens.css";
import axios from "axios";
export default function Mens() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://smily-kart.onrender.com/mens")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleCart = () => {
    alert("Product has been successfully Added to Cart!");
  };
  return (
    <>
      <h1 className="meheading">Mens</h1>
      <div className="main_cont">
        {data.map((ele, i) => (
          <div className="card_container" key={i}>
            <div className="img_container">
              <img src={ele.image1} />
            </div>
            <div className="small_img">
              <img src={ele.image2} />

              <div className="txt_container">
                <h3>{ele.title.substring(0, 10)}...</h3>
                <p>₹ {ele.price}</p>
              </div>

              <img
                onClick={handleCart}
                className="cart_btn"
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
