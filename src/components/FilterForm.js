import React, { useEffect, useState } from "react";
import RadioButton from "./RadioButton";
import SearchInput from "./searchInput";
import RangeInput from "./RangeInput";

function Tags(props) {
  const [searchParms, setSearchParms] = useState({
    searchKey: "",
    cusineType: "",
    deliveryOption: "",
    price: "30",
  });
  
  useEffect(()=>{
     props.onChangeParms(searchParms)
  })

  const onChangeSearchInput = (e) => {
    e.preventDefault();
    const searchKey = e.target.value;
    setSearchParms({ ...searchParms, searchKey: searchKey });
  };
  const onChangePriceRange = (e) => {
    e.preventDefault();
    const price = e.target.value;
    setSearchParms({ ...searchParms, price: price });
  };
  const onChangeRadio = (e) => {
    const cusine = e.target.value;
    setSearchParms({ ...searchParms, cusineType: cusine });
  };
  const onChangeRadioDelivery = (e) => {
    const deliveryOption = e.target.value;
    setSearchParms({ ...searchParms, deliveryOption: deliveryOption });
  };

  const [filters] = useState({
    cusineType: [
      {
        id: "Barbecuing_and_Grilling",
        name: "cusine",
        value: "Barbecuing and Grilling",
        searchParmsKey: "cusineType",
        for: "Barbecuing_and_Grilling",
        searchParms: searchParms,
      },
      {
        id: "Beverages",
        name: "cusine",
        value: "Beverages",
        searchParmsKey: "cusineType",
        for: "Beverages",
        searchParms: searchParms,
      },
      {
        id: "Seafood",
        name: "cusine",
        value: "Seafood",
        searchParmsKey: "cusineType",
        for: "Seafood",
        searchParms: searchParms,
      },
      {
        id: "Soup_and_salads",
        name: "cusine",
        value: "Soup and salads",
        searchParmsKey: "cusineType",
        for: "Soup and salads",
        searchParms: searchParms,
      },
      {
        id: "Appetizers",
        name: "cusine",
        value: "Appetizers",
        searchParmsKey: "cusineType",
        for: "Appetizers",
        searchParms: searchParms,
      },
    ],
    deliveryOptions: [
      {
        id: "delivery",
        name: "delivery",
        value: "delivery",
        searchParmsKey: "deliveryOption",
        for: "delivery",
        searchParms: searchParms,
      },
      {
        id: "takeout",
        name: "delivery",
        value: "takeout",
        searchParmsKey: "deliveryOption",
        for: "takeout",
        searchParms: searchParms,
      },
    ],
  });
  return (
    <form>
      <SearchInput
        onChangeSearchInput={onChangeSearchInput}
        searchParms={searchParms.searchKey}
      />
      <div className="cusine_list">
        {filters["cusineType"].map((item) => (
          <RadioButton
            id={item.id}
            name={item.name}
            value={item.value}
            searchParmsKey={item.searchParmsKey}
            onChange={onChangeRadio}
            for={item.for}
            searchParms={searchParms}
            className="cusine_type"
          />
        ))}
      </div>
      <div className="delivery_options">
        {filters["deliveryOptions"].map((item) => (
          <RadioButton
            id={item.id}
            name={item.name}
            value={item.value}
            searchParmsKey={item.searchParmsKey}
            onChange={onChangeRadioDelivery}
            for={item.for}
            searchParms={searchParms}
            className="delivery_type"
          />
        ))}
      </div>
      <RangeInput
        onChangePriceRange={onChangePriceRange}
        searchParms={searchParms}
      />
    </form>
  );
}

export default Tags;
