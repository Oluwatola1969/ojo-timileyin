import About from '../src/components/about/About'
import Nav from '../src/components/nav/Nav'
import Header from '../src/components/header/Header';
import Portfolio from '../src/components/portfolio/Portfolio';
import Contact from '../src/components/contact/Contact';
import Footer from '../src/components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
