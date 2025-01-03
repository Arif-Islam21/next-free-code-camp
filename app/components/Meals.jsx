"use client";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();
      console.log(data.meals);
      setMeals(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  const handler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          onChange={handler}
          type="text"
          placeholder="search meals here"
          className="input input-bordered"
        />
        <button onClick={() => loadData()} className="btn ">
          Search
        </button>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4">
        {meals.length &&
          meals?.map((meal, idx) => (
            <div key={meal.idMeal} className="border-2 p-4">
              <h4 className="text-xl font-bold">{meal.strMeal}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Meals;
