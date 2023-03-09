import React from "react";
import UsersPres from "./UsersPres";


//Al ser Contenedor, de JSX solo sera para renderizar al presentacional
const UserCont = () => {

    let nombre = "pepito"
    let apellido ="perez"

    return (
        <div>
            <UsersPres nombre={nombre} apellido= {apellido}/>
        </div>
    );
};

export default UserCont;
