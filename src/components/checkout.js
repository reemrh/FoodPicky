import React, { useState } from "react";
import "../App.css";
import FormFeild from "./FormFeild";

function Checkout(props) {
  const [formFeilds, setFormFeilds] = useState([
    {
      firstName: "",
      lastName: "",
      country: "",
      companyName: "",
      fullAdress: "",
      city: "",
      zipCode: "",
      email: "",
      phone: "",
    },
  ]);

  return (
    <div className="FormWrap">
      <form className=" inputs-wrapper checkoutForm">
        <div className="Cart-summary">Cart summary</div>
        <div className="checkoutInputWrapper">
          <div className="checkoutInputs">
            <div className="row-feild">
              <FormFeild
                label="First Name*"
                placeholder="John"
                type="text"
                className="Feild"
                onChange={(e) =>
                  setFormFeilds([{ ...formFeilds, firstName: e.target.value }])
                }
                required
                value={formFeilds[0].firstName}
              />

              <FormFeild
                label="Last Name*"
                placeholder="Doe"
                type="text"
                className="Feild"
                onChange={(e) =>
                  setFormFeilds([{ ...formFeilds, lastName: e.target.value }])
                }
                required
                value={formFeilds[0].lastName}
              />
            </div>
            <div className="row-feild">
              <div className="Feild">
                <label>Country*</label>
                <select
                  onChange={(e) =>
                    setFormFeilds([{ ...formFeilds, country: e.target.value }])
                  }
                  value={formFeilds[0].country}
                  required
                >
                  <option>India</option>
                </select>
              </div>

              <FormFeild
                label="Company Name"
                placeholder="Lorem Ipsum"
                type="text"
                className="Feild"
                onChange={(e) =>
                  setFormFeilds([
                    { ...formFeilds, companyName: e.target.value },
                  ])
                }
                value={formFeilds[0].companyName}
              />
            </div>
            <div className="row-feild">
              <FormFeild
                label="Full Address"
                placeholder="124, Lorem Street."
                type="text"
                className="Feild"
                onChange={(e) =>
                  setFormFeilds([{ ...formFeilds, fullAdress: e.target.value }])
                }
                required
                value={formFeilds[0].fullAdress}
              />
            </div>
            <div className="row-feild">
              <FormFeild
                label="City / state*"
                placeholder="Jaipur"
                type="text"
                className="Feild"
                onChange={(e) =>
                  setFormFeilds([{ ...formFeilds, city: e.target.value }])
                }
                required
                value={formFeilds[0].city}
              />

              <FormFeild
                label="Zip / Postal Code*"
                placeholder="302012"
                type="text"
                className="Feild"
                onChange={(e) =>
                  setFormFeilds([{ ...formFeilds, zipCode: e.target.value }])
                }
                required
                value={formFeilds[0].zipCode}
              />
            </div>
            <div className="row-feild">
              <FormFeild
                label="Email Address*"
                placeholder="John@doe.com"
                type="text"
                className="Feild"
                onChange={(e) =>
                  setFormFeilds([{ ...formFeilds, email: e.target.value }])
                }
                required
                value={formFeilds[0].email}
              />

              <FormFeild
                label="Phone*"
                placeholder="123-345-3322"
                type="text"
                className="Feild"
                onChange={(e) =>
                  setFormFeilds([{ ...formFeilds, phone: e.target.value }])
                }
                required
                value={formFeilds[0].phone}
              />
            </div>
          </div>
          <div className="summary">
            <div className="Cart-summary">Cart summary</div>
            <div className="total">
              <p>cart subtotal</p>
              <p>$29.00</p>
            </div>
            <div className="total">
              <p>Shipping & Handling</p>
              <p>$2.00</p>
            </div>
            <div className="total">
              <p>Total</p>
              <p className="price">$31.00</p>
            </div>
            <div className="orderNow">
                Order Now 
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
