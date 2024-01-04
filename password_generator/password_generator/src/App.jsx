import { useState,useEffect,useCallback,useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if (numAllowed) str += "0123456789";
      if (charAllowed) str += "@#$%&-_+";

      for (let i = 1; i < length; i++) {
        const char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
  }, [length,numAllowed,charAllowed])
  
   const passwordRef = useRef(null);

  const copyToClipboard = ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed])

  return (
    <div className='w-full max-w-md mx-auto my-8 shadow-2xl rounded-lg px-4 py-3 bg-gray-700 text-orange-800 text-md font-bold'>
      <h1 className='text-center text-white my-3'>Password Generator</h1>
      <div className=' flex shadow rounded-lg mb-4 overflow-hidden'>
        <input
          type="text"
          value={password}
          readOnly
          placeholder='Password'
          className='outline-none w-full py-1 px-3'
          ref={passwordRef}
        />
        <button
        onClick={copyToClipboard}
          className='outline-none bg-blue-800 text-white px-4 py-0.5 shrink cursor-pointer'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 space-x-2 '>
        <div className='flex item-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label className='text-white' htmlFor="length">Length: ({length})</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }}
          />
          <label className='text-white' htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label className='text-white' htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
