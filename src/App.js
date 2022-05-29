// import components
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import ReactCarusel from "./components/reactCarusel/ReactCarusel";
import Servis from "./components/servis/Servis";
import Offer from "./components/offer/Offer";
import Follow from "./components/follow/Follow";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <ReactCarusel/>
      <Servis/>
      <Offer/>
      <Follow/>
      <Footer/>
    </div>
  );
}

export default App;
