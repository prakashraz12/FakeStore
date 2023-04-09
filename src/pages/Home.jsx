import React from "react";
import Header from "../module/Layout/Header";
import { Container, Grid } from "@mui/material";
import { CarouselFunc } from "../module/Layout/Carosule";
import { useGetAllProductQuery } from "../services/api.get";
import ProductCard from "../module/common/Card";

const Home = () => {
  const { data, isLoading, isError } = useGetAllProductQuery();
  return (
    <div>
      {isLoading ? (
        <h1>Loading......</h1>
      ) : isError ? (
        <h1>errro</h1>
      ) : (
        <>
          <Header />
          <Grid container>
            <Grid item xs={12}>
              <CarouselFunc />
            </Grid>
            <Container
              fixed
              sx={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
            >
              {data?.map((items, index) => (
                <ProductCard data={items} />
              ))}
            </Container>
          </Grid>
        </>
      )}
    </div>
  );
};

export default Home;
