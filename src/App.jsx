import { useState } from 'react'
import './App.css'
import About from './Components/About'
import Gallery from './Components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#2d3139] flex">

    <div className="hidden lg:block lg:w-1/2" />
    
    <div className="w-full lg:w-1/2 mr-25 p-6 lg:p-12 ">
      <div className="w-full max-w-[520px] space-y-6">
        <About />
        <div className='h-[4px] ml-20 w-full bg-gray-600 rounded shadow-[2px_2px_5px_rgba(0,0,0.8,0.8)]' />

        <Gallery />
        <div className='h-[4px] ml-20 w-full bg-gray-600 rounded shadow-[2px_2px_5px_rgba(0,0,0.8,0.8)]' />

      </div>
    </div>
  </div>
  )
}

export default App
