import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Logo from "../includes/imgs/logo.png";
// import bitcoin from "../includes/imgs/bitcoin.png";
// import maestro from "../includes/imgs/maestro.png";
// import paypal from "../includes/imgs/paypal.png";
// import stripe from "../includes/imgs/stripe.png";
// import mastercard from "../includes/imgs/mastercard.png";

function Footer(props) {
  const [cities, setCities] = useState([]);
  const [footer, setFooter] = useState({
      address:'',
      phone:'',
      payment:[],
  });

 
  useEffect(() => {
    axios
      .get("https://foodie-api-dash.herokuapp.com/api/Cities")
      .then((result) => {
        if (result.status === 200) {
          setCities(result.data.data);
        } else {
          console.log("error");
        }
      })
      .catch((e) => {
        console.log(e);
      });

      axios
      .get("https://foodie-api-dash.herokuapp.com/api/Buckets/home-footer")
      .then((result) => {
        if (result.status === 200) {
          setFooter({
            address:result.data.data.objects['home-footer-address'].value,
            phone:result.data.data.objects['home-footer-phone'].value,
            payment:result.data.data.objects['home-footer-payment-options'].objects,              
          });
        } else {
          console.log("error");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <div className="footer">
      <div className="top-footer">
        <div>
          <img src={Logo} width="70" alt="logo" />
          <p>Order Delivery & Take-Out</p>
        </div>
        <div>
          <p className="footer-heading">About Us</p>
          <ul>
            <li>About us</li>
            <li>History</li>
            <li>Our Team</li>
            <li>We are hiring</li>
          </ul>
        </div>
        <div className="popular-location-div">
          <p className="footer-heading">Popular locations</p>
          <div className="popular-locations">
            <ul>
              {cities.map((i, key) => {
                if (key < 4) return <li key={key}>{i}</li>;
              })}
            </ul>
            <ul>
              {cities.map((i, key) => {
                if (key >= 4) return <li key={key}>{i}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="buttom-footer">
        <div className="payment-options">
          <p className="footer-heading">Payment Options</p>
          <div className="payment">
           
             { footer.payment.map((i,key) => <img key={key} src={i.value} alt={i.type} />)}
          </div>
        </div>
        <div className="adress-phone">
          <div className="adress">
            <p className="footer-heading">Address</p>
            <p>
              {footer.address}
            </p>
          </div>
          <div className="phone">
            <p className="footer-heading">Phone:</p>
            <pre>{footer.phone}</pre>
          </div>
        </div>
        <div className="addition-info">
          <p className="footer-heading">Addition information</p>
          <p>
            Join the thousands of other restaurants who benefit from having
            their menus on TakeOff
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
