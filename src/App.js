import React from "react";
// import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Counter from "./user/Counter/Counter";
import { configstore } from "./Redux/store";

// import Home from "./user/Dom/Nested/Pages/Home";
// import About from "./user/Dom/Nested/Pages/About";
// import Contact from "./user/Dom/Nested/Pages/Contact";
// import FinalProduct from "./user/container/Product/FinalProduct";


function App() {
    const store = configstore()

  return (
  <>    
        <Provider store={store}>
            <Counter />
        </Provider>

     {/* <Counter /> */}
     
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
 