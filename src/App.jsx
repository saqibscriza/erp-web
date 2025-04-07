import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/footer'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Header />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
