import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import StickyCategoryModal from './StickyCategoryModal/StickyCategoryModal';
import Nav from "./components/Navbar/CategoryNav"
import  {ShopMain} from "../src/pages/shop/ShopMain/ShopMain"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<ShopMain />} />
      </Routes>
      <StickyCategoryModal />
      <Footer />
    </Router>
  );
}

export default App;
