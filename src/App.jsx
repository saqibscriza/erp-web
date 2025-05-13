
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import FeatureManagement from './Pages/features/FeatureManagement';
import FAQ from './karanComponent/FaQKa';
import Testimonials from './Pages/Testimonials';
// import Contact from './Pages/Contact';
import Contact from './karanComponent/ContactUsKa';

import FeatureLayout from './Pages/features/FeatureLayout';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}>
            <Route element={<FeatureLayout />}>
              <Route index element={<Navigate to="academics" replace />} />
              <Route path=':featureType' element={<FeatureManagement />} />
            </Route>
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/contact' element={<Contact />} /> */}


          {/* Catch-all route for unknown feature types */}
          <Route path='*' element={<Navigate to="/academics" replace />} />
        </Routes>

        <Footer />

      </BrowserRouter>


    </>
  );
}

export default App;