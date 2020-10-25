import React from "react";
import star from "../includes/imgs/star.png";
import lightingStar from "../includes/imgs/lightingStar.png";

function Rating(props) {
  const ratingValue = props.rates;
  return (
    <div className="rating" >
      {ratingValue >= 1 ? (
        <img src={lightingStar} alt="lightingStar" />
      ) : (
        <img src={star} alt="star" />
      )}
      {ratingValue >= 2 ? (
        <img src={lightingStar} alt="lightingStar" />
      ) : (
        <img src={star} alt="star" />
      )}
      {ratingValue >= 3 ? (
        <img src={lightingStar} alt="lightingStar" />
      ) : (
        <img src={star} alt="star" />
      )}
      {ratingValue >= 4 ? (
        <img src={lightingStar} alt="lightingStar" />
      ) : (
        <img src={star} alt="star" />
      )}
      {ratingValue >= 5 ? (
        <img src={lightingStar} alt="lightingStar" />
      ) : (
        <img src={star} alt="star" />
      )}
    </div>
  );
}

export default Rating;
