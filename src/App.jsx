import {Routes, Route} from "react-router-dom"
// import ScrollToTop from "./components/ScrollToTop"
import Navbar from './landing_pages/Navbar'
import HomePage from './landing_pages/home/HomePage'
import Footer from './landing_pages/Footer'
import OpenAccount from "./landing_pages/OpenAccount"
import PartnerWithUs from "./landing_pages/listproperty/PartnerWithus"
import NotFound from "./landing_pages/pages/NotFound"
import Brands from "./brands/Brands"
import Categories from "./categories/Categories"
import './App.css'

function App() {
   return(
       
     <>
  <Navbar />
  {/* <ScrollToTop /> */}
  <main style={{ marginTop: "120px" }}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<OpenAccount />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/listproperty" element={<PartnerWithUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>

  <Footer />
</>


   )}

export default App;
