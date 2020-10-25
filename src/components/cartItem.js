import React from "react";
import remove from "../includes/imgs/remove-from-cart.png";



function CartItem(props) {
    const item = props.item
    return(
        <li className="cartItem" key={item.id}>
                <img
                  src={item.mealImg}
                  alt="item"
                  width="100px"
                  height="100px"
                />
                <div className="item-content">
                  <p>{item.mealName}</p>
                  <div className="item-btns">
                    <div className="price">
                      ${item.price}
                      {/* {item.price * item.ammount} */}
                    </div>
                    <div className="ammount">
                      <div
                        className="minus"
                        onClick={() => props.onclickMinus(item.id)}
                      >
                        -
                      </div>
                      <div className="account">{item.ammount}</div>
                      <div
                        className="plus"
                        onClick={() => props.onclickPlus(item.id)}
                      >
                        +
                      </div>
                    </div>
                    <div className="remove">
                      <img
                        src={remove}
                        alt="remove"
                        onClick={() => props.onclickRemove(item.id)}
                      />
                    </div>
                  </div>
                </div>
              </li>
    );

}


export default CartItem;
