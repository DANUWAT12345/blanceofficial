import './App.css';
import Mainnavbar from './nav.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contactpage from './contactpage/contact.js';
import Homepage from './homepage/homepage.js';
import Portfoliopage from './portfoliopage/portfoliopage.js';
import Aboutpage from './aboutpage/aboutpage.js';
import Servicespage from './servicespage/sevicespage.js';
import Pricingpage from './pricingpage/pricingpage.js';
import Footer from './homepage/footer.js';

function App() {
  return (
    <Router>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
        <div className="App">
          <Mainnavbar />
          <nav>
            <Link to='/'></Link>
            <Link to='/portfolio'></Link>
            <Link to='/about'></Link>
            <Link to='/contact'></Link>
            <Link to='/services'></Link>
            <Link to='/pricing'></Link>
          </nav>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/portfolio" element={<Portfoliopage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/services" element={<Servicespage />} />
            <Route path="/pricing" element={<Pricingpage />} />
          </Routes>
        </div>
        <Footer/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
