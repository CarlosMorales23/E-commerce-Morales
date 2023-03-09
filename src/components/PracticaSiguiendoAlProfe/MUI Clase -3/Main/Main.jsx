import { Box } from "@mui/material";
import React from "react";
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
        </Box>
    );
};

export default Main;
