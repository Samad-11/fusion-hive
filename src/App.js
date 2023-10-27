import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Loader from "./components/Loader";
import SEO from "./components/SEO";
import Pricing from "./components/Pricing";

function App() {
  const [menu, setMenu] = useState("");
  let title = "Fusion Hive";
  const hashChanged = () => {
    if (window.location.hash.length < 1) {
      title = "Fusion Hive";
    } else {
      title = "FH | " + window.location.hash.slice(1);
    }
  };
  window.onhashchange = hashChanged();
  return (
    <div id="top" className={menu}>
      <SEO title={title} />
      <Header setMenu={setMenu} />
      <Home setMenu={setMenu} />
      <About setMenu={setMenu} />
      <Service setMenu={setMenu} />
      <Work setMenu={setMenu} />
      <Pricing setMenu={setMenu} />
      <Contact setMenu={setMenu} />
      {/* <Loader /> */}
      <Footer setMenu={setMenu} />
    </div>
  );
}

export default App;
