import { useSelector} from "react-redux";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./views/components/Header";
import Recipes from "./views/pages/Recipes";
import Home from "./views/pages/Home";
import Products from "./views/pages/Products";
import Cart from "./views/pages/Cart";
import Footer from "./views/components/Footer";
import Modal from "./views/components/Modal";
import SingleRecipe from "./views/pages/SingleRecipe";

function App() {

 
 const {modal} = useSelector((state) => state);



  return (
    <>
    <Router>
     
    <div className="container">
    <Header/>
    
    {modal.isOpen === true ? <Modal/> : null}
    
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/recipes" element={<Recipes/>} />
    <Route exact path="/recipes/:id" element={<SingleRecipe/>} />
    <Route exact path="/products" element={<Products/>}/>
    <Route exact path="/cart" element={<Cart/>} />
    </Routes>
    </div>

    <Footer/>
    
    </Router>
    </>
  );
}

export default App;
