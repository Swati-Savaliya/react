// import logo from './logo.svg';
// import './App.css';



import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './user/component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Contact from './user/container/Contact/Contact';
import Product5 from './user/container/Product/Product5';
import Home from './user/container/Home/Home';
import FinalProduct from './user/container/Product/FinalProduct';



function App() {
  return (
  <>

  <FinalProduct/>
  
      <Header />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Product5" element ={<Product5 />} />
      </Routes>
    
  </>
  );
}

export default App;
