import React, { useEffect, useState } from "react";
import Meals from "../Meals/Meals";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [serchTxt, setSearchTxt] = useState("");
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${serchTxt}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [serchTxt]);
  const searchMeal = (e) => {
    setSearchTxt(e.target.value);
  };
  console.log(meals);
  return (
    <section
      className="home-section"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0NFtmrk8gJkhrXWZk9vxSH_I9OqUnTTkLw&usqp=CAU)",
        backgroundSize: "cover",
        height: "400px",
      }}
    >
      <div className="container d-flex w-100 h-100 align-items-center justify-content-center  flex-column">
        <div className="content text-center">
          <h1 className="content-title display-5 text-bold">
            Best Different Type of Grocery Store
          </h1>
          <p className="content-des">
            Quickly aggregate empowered networks after emerging products...
          </p>
        </div>
        <div className="search-filed">
          <input
            onChange={searchMeal}
            style={{ width: "400px" }}
            className="form-control "
            placeholder="Search Meals"
            type="text"
          />
        </div>
      </div>
      <div className="container my-5">
        <div className="section-title text-center my-5">
          <h3 className="text-bold">Featured Categories</h3>
          <p>Choose your necessary products from this feature categories.</p>
        </div>
        <div className="row ">
          {meals.map((meal) => (
            <Meals key={meal.idMeal} meal={meal}></Meals>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
