import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step , setStep] = useState(1);
  const [delay , setDelay] = useState(0);
  const [lower , setLower] = useState(-1000);
  const [higher , setHigher] = useState(1000);

  const increament = () => {
      setCount((prev) =>
        Math.max(lower , prev+step)
      )
  }

  const decreament = () => {
    setCount((prev) => (
      Math.min(higher , prev - step)
    ))
  }

  const AsyncIncreament = async () => {
    setTimeout(() => {
      setCount((prev) => (
        Math.min(higher , prev + step)
      ))
    } , delay * 1000)
  }

  const AsyncDecreament = () => {
    setTimeout(() => {
      setCount((prev) => Math.max(lower , prev - step))
    } , delay * 1000);
  }

  return (
    <>
      <div className='w-full min-h-screen'>
          <div className='w-full flex justify-center border-b shadow-md p-2 text-2xl'>Advance Counter</div>
          
          <div className='w-full flex flex-col items-center'>
              <h1 className='text-4xl mt-5 font-bold'>{count}</h1>
              <div className='flex gap-5 mt-5'>
                  <button
                    onClick={decreament}
                  className='p-2 border rounded-md bg-gray-200'>{" - "}</button>
                  <button 
                    onClick={increament}
                  className='p-2 border rounded-md bg-gray-200'>{" + "}</button>
              </div>

              <div className='mt-10'>
                  <button
                    onClick={AsyncDecreament}
                  className='p-2 border rounded-md bg-gray-200'>{"Async - "}</button>
                  <button
                    onClick={AsyncIncreament}
                  className='p-2 border rounded-md bg-gray-200'>{"Async + "}</button>
              </div>

              <div className='flex mt-2'>
                <input type="range" min={0} max={3} value={delay} onChange={(e) => setDelay(e.target.value)} />
                  <div>{delay}s</div>
              </div>
              <div className='flex mt-10'>
                <p>Increment/Decrement by : </p>
                <input type="number" className='border p-2' value={step} onChange={(e) => setStep((Number(e.target.value)))} />
              </div>
              <div className='flex mt-5'>
                <p>lower Limit :</p>
                <input type="number" value={lower} className='border p-2' onChange={(e) => setLower(Number((e.target.value) > 1 ? 1 : e.target.value))} />
              </div>
              <div className='flex mt-5'>
                <p>higher Limit :</p>
                <input type="number" value={higher} className='border p-2' onChange={(e) => setHigher(Number((e.target.value) < 1 ? 1 : e.target.value))} />
              </div>
          </div>


      </div>
    </>
  )
}

export default App
