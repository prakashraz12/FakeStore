import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Rating from "../components/RatingCounter";
import { useGetProductsbyIdQuery } from "../services/api.get";
import { useParams } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
const SignleProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductsbyIdQuery(id);


  const [orderItemQuantity, setOrderItemQuantity] = useState(1);
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>error</h1>
      ) : (
        <Grid
          container
          sx={{ padding: "20px", marginTop: "40px", display: "flex" }}
          spacing={1}
        >
          <Grid item xs={4}>
            <img
              src={data.image}
              style={{ width: "400px", height: "500px", objectFit: "contain" }}
              alt="product-image"
            />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={7}>
            <Container fixed maxWidth="md">
              <Typography variant="h6" fontWeight={"600"}>
                {data.title}
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "20px",
                  }}
                >
                  <Rating stars={data.rating.rate} />{" "}
                  <Typography variant="h5" fontWeight={"500"}>
                    |
                  </Typography>{" "}
                  ({data.rating.rate}){" "}
                  <Typography variant="h5" fontWeight={"500"}>
                    |
                  </Typography>{" "}
                  (count {data.rating.count})
                </Box>
                <Box>
                  <Typography variant="body2">
                    Category: {data.category}
                  </Typography>
                  <Typography variant="h4" fontWeight={"600"}>
                    ${data.price}
                  </Typography>
                  <Box sx={{display:"flex", alignItems:"center"}}> 
                    <IconButton onClick={()=> setOrderItemQuantity(orderItemQuantity -1 )}>
                    <IndeterminateCheckBoxIcon fontSize="large" />

                    </IconButton>
                    <Typography variant="h5" fontWeight={"600"}>{orderItemQuantity}</Typography>

                    <IconButton onClick={()=> setOrderItemQuantity(orderItemQuantity + 1 )}>
                      <AddBoxIcon fontSize="large" />
                    </IconButton>
                  </Box>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography>{data.description}</Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Container>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default SignleProductPage;
