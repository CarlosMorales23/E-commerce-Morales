
import React from "react";
import { Box, Grid } from "@mui/material";
import styles from "./main.module.css";



const Main = () => {
    return (
        <Box 
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: "lightblue",
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={3} border={2}   borderColor="red">
                    <h2>Hijo1</h2>
                </Grid>
                <Grid item xs={12} sm={6}lg={3}  border={2}  borderColor="red">
                    <h2>Hijo2</h2>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} border={2}   borderColor="red">
                    <h2>Hijo3</h2>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} border={2}   borderColor="red">
                    <h2>Hijo4</h2>
                </Grid>
            </Grid>

        </Box>
    );
};

export default Main;
