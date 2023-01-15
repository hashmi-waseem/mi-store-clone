import './App.css';
import PreNav from './Components/preNav';
import NavBar from "./Components/NavBar";
import Slider from './Components/Slider'
import {BrowserRouter as Router} from "react-router-dom"
import data from './data/data.json'
import Offers from './Components/Offers'
import Heading from './Components/Heading.js'
import StarProducts from './Components/StarProducts.js'
import HotAccessoriesMenu from './Components/HotAccessoriesMenu.js'
import HotAccessories from './Components/HotAccessories.js'
import Banner from './Components/Banner.js'
import Footer from './Components/Footer.js'

function App() {
  return (
    <Router>
      <PreNav/>
      <NavBar/>
      <Slider start={data.banner.start}/>
      <Offers offers={data.offer}/>
      <Heading text="STAR PRODUCTS" />
      <StarProducts StarProduct = {data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
      <HotAccessories cover={data.hotAccessoriesCover.music} normal={data.hotAccessories.music}/>
      <HotAccessories cover={data.hotAccessoriesCover.smartDevice} normal={data.hotAccessories.smartDevice}/>
      <HotAccessories cover={data.hotAccessoriesCover.home} normal={data.hotAccessories.home}/>
      <HotAccessories cover={data.hotAccessoriesCover.mobileAccessories} normal={data.hotAccessories.mobileAccessories}/>
      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>
      <Heading text="LET'S STAY CONNECTED!"/>
      <Footer/>
      <Heading text="Made with 🤍 by Waseem Hashmi"/>
    </Router>
  );
}

export default App;