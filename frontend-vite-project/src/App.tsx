import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Slider from './components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>

        <Slider></Slider>

      <h1 className="bg-three font-poppins">
      Hello world!
   
    </h1>



    <Footer></Footer>
    
      </div>
    </>
  )
}

export default App
