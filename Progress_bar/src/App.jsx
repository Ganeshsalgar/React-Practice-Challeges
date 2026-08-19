import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [stop, setStop] = useState(true);
  const [reset, setReset] = useState(false)

  console.log(count);
  

  useEffect(() => {
      if(stop) return;
       const progressBar = () => {
        const Id = setTimeout(() => {
          setCount(prev => prev + 1);
        }, 10)
        if(count === 420){
          return clearTimeout(Id);
        }
      }

      progressBar();
  } , [count , stop , reset])

  const handleStart = () => {
      // progressBar();
      setStop(false);
  }
  const handleStop = () => {
      // processBar();
      setStop(true)
  }
  const handleReset = () => {
    setCount(0);
    // setStop(false);
  }

  return (
    <>
      <div className='w-full min-h-screen'>
        <div className='w-full flex justify-center border-b p-3 text-2xl'>Progress Bar</div>
        <div className='w-full'>
            <div className={`h-3   mt-10 bg-gray-200 mx-15`}>
                <div className={`h-3 bg-blue-500`}
                  style={{ width: `${count}px` }}
                ></div>
            </div>
        </div>

        <div className=' flex justify-center mt-7 gap-5'>
            <button 
            onClick={() => handleStart()}
            disabled={!stop}
            className='bg-blue-500 p-2 text-white px-4 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-md'>Start</button>
            <button 
            disabled={stop}
            onClick={() => handleStop()}
            className='bg-blue-500 p-2 text-white px-4 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-md'>Stop</button>
            <button
            onClick={handleReset}
            className='bg-blue-500 p-2 text-white px-4 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-md'>Reset</button>
            
        </div>
      </div>
    </>
  )
}

export default App
