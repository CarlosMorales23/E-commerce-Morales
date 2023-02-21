const ItemListPres = ({mensaje}) => {

    let estilosgretting = {
        color: "red",
        fontSize: "30px",
        fontWeight: "bold",
        textAlign: "center",
    }
    
    return (
        <h1 style={estilosgretting}>{mensaje}</h1>    
    )
}

export default ItemListPres