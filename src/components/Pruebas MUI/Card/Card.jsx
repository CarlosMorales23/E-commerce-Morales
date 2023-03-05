import { Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const Card = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Nombre del articulo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Descrpción del articulo
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outline">Share</Button>
                <Button size="small" variant="outline">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Card;
