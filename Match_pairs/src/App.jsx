import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div className='w-full min-h-screen'>
      <div className='w-full flex justify-center text-2xl p-2 border-b shadow-lg'>Match Pairs</div>
      <div className='w-full'>
        <div>ganesh</div>
      </div>
    </div>
   </>
  )
}

export default App
