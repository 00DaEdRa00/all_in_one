import Header from "./components/Header"
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

import {ScrollToTop} from './components/scripts/scrollToTop'

function Main() {
  return (
    <div className="body">
      <Header/>
      <main>
        <ScrollToTop />
        <Hero/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contacts/>
      </main>
      <Footer/>
    </div>
  );
}

export default Main;
