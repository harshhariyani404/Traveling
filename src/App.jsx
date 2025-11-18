import bgCurve from "./assets/image.jpg";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Destinations from "./components/Destinations";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div 
      className="page"
      style={{ backgroundImage: `url(${bgCurve})` }}
    >
      <Nav />
      <Hero />
      <Category />
      <Destinations />
      <Steps />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
