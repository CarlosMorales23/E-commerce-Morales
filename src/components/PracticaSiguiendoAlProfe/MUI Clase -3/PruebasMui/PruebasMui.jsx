import { Button, Stack } from "@mui/material";
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
            <Stack spacing={2} direction="row">
                <Button variant="text" color= "secondary">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </div>
    );
};

export default PruebasMui;
