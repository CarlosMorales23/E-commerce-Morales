import { Box, TextField } from "@mui/material";
import React from "react";

const Formularios = () => {
    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
            />
            <TextField id="filled-basic" label="Apellido" variant="filled" />
            <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
            />
        </Box>
    );
};

export default Formularios;
