import React, { useState } from "react";
import placeholder from "../includes/imgs/ordered.png";
import CartItem from "./cartItem";

function Cart(props) {
  const [cart, setCart] = useState([
    {
      id: 0,
      mealName: 'The South"s Best Fried Chicken',
      ammount: 1,
      price: "15.00",
      mealImg: placeholder,
    },
    {
      id: 1,
      mealName: 'The South"s Best Fried Chicken',
      ammount: 2,
      price: "20.00",
      mealImg: placeholder,
    },
    
    {
      id: 2,
      mealName: 'The South"s Best Fried Chicken',
      ammount: 5,
      price: "30.00",
      mealImg:
        placeholder,
    },
    {
        id: 3,
        mealName: 'The South"s Best Fried Chicken',
        ammount: 5,
        price: "30.00",
        mealImg:
          placeholder,
      }, {
        id: 4,
        mealName: 'The South"s Best Fried Chicken',
        ammount: 1,
        price: "15.00",
        mealImg: placeholder,
      },
      {
        id: 5,
        mealName: 'The South"s Best Fried Chicken',
        ammount: 2,
        price: "20.00",
        mealImg: placeholder,
      },
  ]);


  const totalAmount= () =>{
      let total = 0;
      cart.map( i => total+= i.ammount * i.price );
      return total;
  }
  const onclickMinus = (e) => {
    const newCart = cart.map((i) => {
      if (i.id === e) {
        i.ammount = i.ammount - 1 < 0 ? 0 : i.ammount - 1;
      }
      return i;
    });
    setCart(newCart);
  };

  const onclickPlus = (e) => {
    const newCart = cart.map((i) => {
      if (i.id === e) {
        i.ammount = i.ammount + 1;
      }
      return i;
    });
    setCart(newCart);
  };

  const onclickRemove = (e) => {
    let newCart = cart.filter((i) => i.id !== e);
    setCart(newCart);
  };
  return (
    <div className="cart-wrapper">
      <div className="cart">
        <h2>My Cart</h2>
        <hr />
        <ul className="cartList">
          {cart.length !== 0 ? (
            cart.map((item) => (
              <CartItem item={item} 
               onclickMinus={onclickMinus}
               onclickPlus={onclickPlus}
               onclickRemove={onclickRemove}
              />
            ))
          ) : (
            <center className="noItems">No Items </center>
          )}
        </ul>
        <div className="checkout">
          <p>Total : <strong>$ {totalAmount()} </strong> </p>
          <div className="searchBtn">Checkout</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
