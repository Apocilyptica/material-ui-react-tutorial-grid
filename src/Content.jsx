import React from "react";
import CoffeeCard from "./CoffeCard";

import Grid from "@material-ui/core/Grid";

import { coffeeProducts } from "./coffeeProducts";

const Content = () => {
  return (
    <Grid container spacing={2}>
      {coffeeProducts.map((item, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <CoffeeCard
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              avatarSrc={item.avatarUrl}
              imgSrc={item.imageUrl}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Content;
