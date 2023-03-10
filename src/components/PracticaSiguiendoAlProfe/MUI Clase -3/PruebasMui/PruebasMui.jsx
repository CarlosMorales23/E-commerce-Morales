import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";

const PruebasMui = () => {
    return (
        <div
            style={{
                color: "81d4fa",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* Botones */}
            <Stack spacing={2} direction="row">
                <Button variant="text" color="secondary">
                    Text
                </Button>
                <Button variant="contained" sx={{ textTransform: "none" }}>
                    Contained
                </Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>

            {/* Imputs */}
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
                    label="Outlined"
                    variant="outlined"
                    disabled="true"
                />
                <TextField id="filled-basic" label="Nombre" variant="filled" />
                {/* En React el label cumple función de placeHolder tambien */}
                <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    color="secondary"
                    size="small"
                />

                {/* En MUI al final de la page de Inputs esta la documentación de las Props que puede recibir los inputs */}
            </Box>
        </div>
    );
};

export default PruebasMui;
