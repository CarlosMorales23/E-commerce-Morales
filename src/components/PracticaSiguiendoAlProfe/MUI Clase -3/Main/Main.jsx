import { Box } from "@mui/material";
import React from "react";
import Button from "../Button/Button";
import Grilla from "../Grilla/Grilla";


const Main = () => {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: "#bbdefb",
                "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        >
            <Grilla />
            <Button/>
        </Box>
    );
};

export default Main;
