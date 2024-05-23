import './App.css'
import Navbar from './components/Navbar/Navbar'
import Report from './components/Report/Report.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {


  return (
    <>
     <div className='overflow-x-hidden'>
      <Navbar className="navbar fixed-top position-absolute top-0"/>
      <Report />
      <Footer />
      </div>
    </>
  )
}

export default App
