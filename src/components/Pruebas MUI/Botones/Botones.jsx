import { Button, Stack } from "@mui/material";
import React from "react";

const Botones = () => {
    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained" sx={{ textTransform: "none" }}>
                    Contained
                </Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </div>
    );
};

export default Botones;
