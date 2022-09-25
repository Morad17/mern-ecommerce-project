import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
     <Router>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<ProductDetail/>} />
      </Routes>
      <Footer />
     </Router>
      
     
     
    </div>
  );
}

export default App;
