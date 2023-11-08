import { Route, Routes } from "react-router-dom"
import { NavBar } from "./componentes/NavBar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPages } from "./pages/CarritoPages"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                        <Route path="/carrito" element={<CarritoPages></CarritoPages>}></Route>
                        <Route path="/*" element={<navigator to='/'></navigator>}></Route>
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>

    )
}
