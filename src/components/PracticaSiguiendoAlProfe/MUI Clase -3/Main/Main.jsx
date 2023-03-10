import { Box } from "@mui/material";
import React from "react";
import Button from "../Button/Button";
import CustomCardContainer from "../CustomCard/CustomCardContainer";
import Grilla from "../Grilla/Grilla";
import Navbar3 from "../Navbar/Navbar3";


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
            <Navbar3/>
            <Grilla />
            <Button/>
            <CustomCardContainer/>
            
        </Box>
    );
};

export default Main;
