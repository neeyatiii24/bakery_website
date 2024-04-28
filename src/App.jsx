import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Brand from './components/Brand'
import About from './components/About'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Bestsellers from './components/Bestsellers'
import '@fortawesome/fontawesome-free/css/all.css';



function App() {

  return (
    <>
    <Header/>
    <Brand/>
    <Bestsellers/>
    <About/>
    <Gallery/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
