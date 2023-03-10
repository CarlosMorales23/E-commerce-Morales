import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";

const CustomCard = ({title}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://res.cloudinary.com/dybsirwia/image/upload/v1676834445/cld-sample-5.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Descripción del Producto.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined">
                    Learn More
                </Button>
                <Button size="small" variant="outlined">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
};

export default CustomCard;
