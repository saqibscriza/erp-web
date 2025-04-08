import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Header />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
