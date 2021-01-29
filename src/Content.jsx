import React from "react";
import CoffeeCard from "./CoffeCard";

import Grid from "@material-ui/core/Grid";

import { coffeeProducts } from "./coffeeProducts";

const Content = () => {
  const getCoffeeProductData = (coffeeProductObj, index) => {
    return (
      <Grid key={index} item xs={12} sm={6} md={4}>
        <CoffeeCard {...coffeeProductObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {coffeeProducts.map((coffeeProductObj, index) => getCoffeeProductData(coffeeProductObj, index))}
    </Grid>
  );
};

export default Content;
