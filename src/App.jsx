import { useState } from 'react'
import './App.css'
import About from './Components/About'
import Gallery from './Components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#2d3139] flex">
    {/* Left half - empty but responsive */}
    <div className="hidden lg:block lg:w-1/2" />
    
    {/* Right half - widgets */}
    <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
      <div className="w-full max-w-[520px] space-y-6">
        <About />
        <Gallery />
      </div>
    </div>
  </div>
  )
}

export default App
