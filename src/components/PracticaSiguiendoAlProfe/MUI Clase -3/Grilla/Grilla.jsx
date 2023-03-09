import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Grilla = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={3} border={2} borderColor={"green"}>
                    <h2>hola</h2>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} border={2} borderColor={"green"}>
                    <h2>hola</h2>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} border={2} borderColor={"green"}>
                    <h2>hola</h2>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} border={2} borderColor={"green"}>
                    <h2>hola</h2>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Grilla;
