import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [step , setStep] = useState(1);

  return (
      <>
        <div className='w-full min-h-screen'>
          <div className='text-2xl shadow-lg border-b flex justify-center p-2'>Counter</div>
          <div className='flex flex-col items-center pt-5 justify-center'>
              <h1 className='text-4xl font-bold'>{count}</h1>
              <div className='flex mt-6 gap-5'>
                <button  onClick={() => setCount((prev) => setCount(prev - step))} className='border px-2 rounded-sm bg-gray-300'>-</button>
                <button onClick={() => setCount((prev) => setCount(prev + step))}  className='border px-2 rounded-sm bg-gray-300'>+</button>
              </div>
              <div className='flex mt-4'>
                  <p>Increament/Decreament by : </p>
                  <input type="number" className='border mx-2 px-3' value={step} onChange={(e) => setStep(Number(e.target.value))}/>
              </div>
              <button className='mt-10 border bg-gray-200 p-2 rounded-lg' onClick={() => {
                setCount(0);
                setStep(1);
              }}>Reset</button>
          </div>
        </div>
      </>
  )
}

export default App
