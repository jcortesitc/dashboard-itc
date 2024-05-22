import './App.css'
import Navbar from './components/Navbar/Navbar'
import Report from './components/Report/Report.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {


  return (
    <>
      <Navbar className="navbar fixed-top position-absolute top-0"/>
      <Report />
      <Footer />
    </>
  )
}

export default App
