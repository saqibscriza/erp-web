import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import AcademicsManagement from './Pages/features/AcademicsManagement'
import StudentManagement from './Pages/features/StudentManagement'
import TransportationManagement from './Pages/features/TransportationManagement'
import ExamManagement from './Pages/features/ExamManagement'
import HRManagement from './Pages/features/HRManagement'
import FAQ from './Pages/FAQ'
import Testimonials from './Pages/Testimonials'
import Contact from './Pages/Contact'
import FeatureLayout from './Pages/features/FeatureLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}>
            {/* Nested Route for Features */}
            <Route element={<FeatureLayout />}>
              <Route index element={<AcademicsManagement />} />
              <Route path='student-management' element={<StudentManagement />} />
              <Route path='transportation-management' element={<TransportationManagement />} />
              <Route path='exam-management' element={<ExamManagement />} />
              <Route path='hr-management' element={<HRManagement />} />
            </Route>
          </Route>

          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
