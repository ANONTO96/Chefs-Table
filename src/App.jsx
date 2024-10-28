import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Title from './Components/Title/Title'

function App() {
  

  return (
    <>
     {/* header */}
     <Navbar></Navbar>
     {/* banner */}
    <div className='my-5'>
    <Banner></Banner>
    </div>
     {/* title */}
     <Title></Title>
      
    </>
  )
}

export default App
