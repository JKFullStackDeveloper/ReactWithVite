import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="text-5xl font-bold italic bg-sky-500 hover:bg-green-600 mt-10 p-10 rounded-full">Welcome to React + Vite with Tailwind CSS</p>
    </>
  )
}

export default App
