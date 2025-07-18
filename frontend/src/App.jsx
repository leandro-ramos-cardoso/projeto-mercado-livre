import Carrinho from "./components/Carrinho"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Product from "./pages/Product"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/product" element={ <Product /> }/>
      </Routes>

      <Carrinho />
      
      <Footer />
    </BrowserRouter>
  )
}

export default App
