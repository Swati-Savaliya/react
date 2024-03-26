import { Route, Routes } from "react-router-dom";
import Counter from "./user/Counter/Counter";




// import Home from "./user/Dom/Nested/Pages/Home";
// import About from "./user/Dom/Nested/Pages/About";
// import Contact from "./user/Dom/Nested/Pages/Contact";
// import FinalProduct from "./user/container/Product/FinalProduct";


function App() {
  return (
  <>    
     <Counter />
      {/* <Header />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Product5" element ={<Product5 />} />
      </Routes> */}

     
      {/* <Routes>
          <Route exact path="/" element ={<Home />} /> 
          <Route exact path="/about" element ={<About />} /> 
          <Route exact path="/contact" element ={<Contact />} /> 
          
      </Routes> */}

      {/* <FinalProduct /> */}
  </>
  );
}
export default App;
 