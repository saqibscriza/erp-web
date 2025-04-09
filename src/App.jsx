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

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<AcademicsManagement />} />
            <Route path='student-management' element={<StudentManagement />} />
            <Route path='transportation-management' element={<TransportationManagement />} />
            <Route path='exam-management' element={<ExamManagement />} />
            <Route path='hr-management' element={<HRManagement />} />
          </Route>

          <Route path='/about' element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
