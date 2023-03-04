import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box, TextField } from "@mui/material";

const PruebasMUI = () => {
    return (
        <div
            style={{
                backgroundColor: "lightgray",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained" sx={{ textTransform: "none" }}>
                    Contained
                </Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>

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
        </div>
    );
};

export default PruebasMUI;
