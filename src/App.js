// import CustomNavbar from "./components/CustomNabvar/CustomNavbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavbarPres from "./components/Navbar/NavbarPres/NavbarPres";
import ProductCard from "./components/ProductCard.jsx/ProductCard";

function App() {
    return (
        <div className="App">
            {/* <CustomNavbar/> */}
            <NavbarPres />
            <ItemListContainer saludo="Pepito Romero" />
            <ProductCard title="Prodcuto #1" price="100$" descripcion="Este es el mejor producto" stock={true} />
            <ProductCard title="Prodcuto #1" price="100$" descripcion="Este es el mejor producto" stock={false} />
            <ProductCard title="Prodcuto #1"  descripcion="Este es el mejor producto" stock={true} />
            <ProductCard title="Prodcuto #1" price="100$" descripcion="Este es el mejor producto" stock={true} />
        </div>
    )
}

export default App;
