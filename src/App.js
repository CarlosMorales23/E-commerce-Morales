// import Navbar from "./components/Navbar/Navbar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import Footer from "./components/Footer/Footer";

import ItemListContainer2 from "./components/PracticaSiguiendoAlProfe/Componentes Clase -2/ItemListContainer/ItemListContainer2";
import Navbar2 from "./components/PracticaSiguiendoAlProfe/Componentes Clase -2/Navbar/Navbar2";
import ProductCard from "./components/PracticaSiguiendoAlProfe/Componentes Clase -2/ProductCard/ProductCard";

function App() {
    return (
        <div className="App">
            <>
                {/* <Navbar/>
      <ItemListContainer tituloTemporal={"Este Producto pronto estara a la venta"}/>
      <Footer/> */}
                <Navbar2 />
                <ItemListContainer2 />
                <ProductCard title="Producto #1" price={200} stock={true} />
                <ProductCard title="Producto #2"  stock={false} />
                <ProductCard title="Producto #3" price={660} stock={true} />
            </>
        </div>
    );
}

export default App;
