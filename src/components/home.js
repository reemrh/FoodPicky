import React, { useState, useEffect } from "react";
import "../App.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
// import backgroundImage from '../includes/imgs/placeholder.png';
import SearchFood from "./SearchFood";
import Steps from "./Steps";
import LocationBar from "./location";
import FeaturedResturants from "./featuredResturants";
import placeholder from "../includes/imgs/95x95.png";

function Home(props) {
  

  const [foodSorts,setFoodSorts] = useState([]);
  const [redirect, setRedirect] = useState(null);
  const [currentLocation, setCurrentLocation] = useState([]);
  const [response, setResponse] = useState({
    mainHeading: "",
    subHeading: "",
    steps: [],
    backgroundImg: "",
  });
  
  const [featuredResturants] = useState([
    {
      key: 1,
      img: placeholder,
      name: "Maennam Thai Resturant",
      tags: [
        "Burgers ",
        "American ",
        "Sandwiches ",
        "Fast food",
        " Sandwiches",
        " BBQ",
      ],
      price: "10.23",
      deliverTime: "30",
      Rating: 3,
      rates: 122,
    },
    {
      key: 2,
      img: placeholder,
      name: "Maennam Thai Resturant",
      tags: [
        "Burgers ",
        "American ",
        "Sandwiches ",
        "Fast food",
        " Sandwiches",
        " BBQ",
      ],
      price: "10.00",
      deliverTime: "30",
      Rating: 1,
      rates: 122,
    },
    {
      key: 3,
      img: placeholder,
      name: "Maennam Thai Resturant",
      tags: [
        "Burgers ",
        "American ",
        "Sandwiches ",
        "Fast food",
        " Sandwiches",
        " BBQ",
      ],
      price: "10.00",
      deliverTime: "30",
      Rating: 2,
      rates: 122,
    },
    {
      key: 4,
      img: placeholder,
      name: "Maennam Thai Resturant",
      tags: [
        "Burgers ",
        "American ",
        "Sandwiches ",
        "Fast food",
        " Sandwiches",
        " BBQ",
      ],
      price: "10.00",
      deliverTime: "30",
      Rating: 4,
      rates: 122,
    },
    {
      key: 5,
      img: placeholder,
      name: "Maennam Thai Resturant",
      tags: [
        "Burgers ",
        "American ",
        "Sandwiches ",
        "Fast food",
        " Sandwiches",
        " BBQ",
      ],
      price: "10.00",
      deliverTime: "30",
      Rating: 5,
      rates: 122,
    },
    {
      key: 6,
      img: placeholder,
      name: "Maennam Thai Resturant",
      tags: [
        "Burgers ",
        "American ",
        "Sandwiches ",
        "Fast food",
        " Sandwiches",
        " BBQ",
      ],
      price: "10.00",
      deliverTime: "30",
      Rating: 3,
      rates: 122,
    },
  ]);

  const handleSearch = (searchKey) => {
    setRedirect({
      pathname: "/search-results",
      search: `?search=${searchKey}`,
    });
  };

  useEffect(() => {
    axios
      .get("https://foodie-api-dash.herokuapp.com/api/Buckets/home-hero")
      .then((result) => {
        if (result.status === 200) {
          setResponse({
            ...response,
            mainHeading: result.data.data.objects["home-hero-heading"].value,
            subHeading: result.data.data.objects["home-hero-sub-heading"].value,
            steps: result.data.data.objects["home-hero-steps"].objects,
            backgroundImg:result.data.data.objects["home-hero-background"].value,
          });        
        } else {
          console.log("error");
        }
      })
      .catch((e) => {
        console.log(e);
      });

      axios
      .get("https://foodie-api-dash.herokuapp.com/api/Categories")
      .then((result) => {
        if (result.status === 200) {
          setFoodSorts(result.data.data);        
        } else {
          console.log("error");
        }
      })
      .catch((e) => {
        console.log(e);
      });

      axios
      .get("https://foodie-api-dash.herokuapp.com/api/Common/Location")
      .then((result) => {
        if (result.status === 200) {
          setCurrentLocation([result.data.data.country,result.data.data.city]);     
             
        } else {
          console.log("error");
        }
      })
      .catch((e) => {
        console.log(e);
      });
      
  });

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div className="home">
      <div
        className="top-section"
        style={{
          background: `url(${response.backgroundImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '5% 5%',
          backgroundPosition: 'contain',
          backgroundColor: '#cccccc',
        }}
      >
        <p className="main-heading">{response.mainHeading}</p>
        <h6 className="secondery-heading">{response.subHeading}</h6>
        <SearchFood handleSearch={handleSearch} />
        <Steps Steps={response.steps}/>
      </div>
      <LocationBar nearResturantNo="18" currentLocation={currentLocation.join(',')} />
      <FeaturedResturants
        foodSorts={foodSorts}
        FeaturedResturantsArray={featuredResturants}
      />
    </div>
    
  );
}

export default Home;
