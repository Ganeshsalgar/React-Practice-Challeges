import { useState } from 'react'
import './App.css'
import img1 from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"
import img4 from "./assets/4.jpg"
import img5 from "./assets/5.jpg"
import { useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [infinite , setInfinite] = useState(false);
  const [autoPlay , setAutoPlay] = useState(false);
  const [delay , setDelay] = useState(2);
  const catImages = [
    img1,
    img2,
    img3,
    img4,
    img5
  ]
  
  const handleNext = () => {
    if(count >= catImages.length-1  && !infinite) return;
    setCount(prev => ((prev + 1) % catImages.length));
  }

  const handleBack = () => {
    if(count <= 0 && !infinite) return;
    setCount(prev => (prev <= 0 ? catImages.length-1 : prev-1));
  }

  useEffect(() => {
      if(!autoPlay) return;
      setTimeout(() => handleNext() , delay*1000);
  } , [count , autoPlay, infinite])
  


  return (
    <>
      <div className='w-full min-h-screen'>
        <div className='w-full flex justify-center p-2 text-xl border-b shadow-lg'>Carousal</div>
        <div className='w-full flex flex-col items-center p-10'>
            <div className='flex items-center'>
              <button onClick={handleBack} className='p-2 block border bg-gray-100 rounded-full w-10 h-10'>{"<"}</button>
              <div className='w-50'><img src={catImages[count]} alt="" /></div>
             
              <button onClick={handleNext} className='p-2 block border bg-gray-100 rounded-full w-10 h-10'>{">"}</button>
            </div>
             <div className='mt-5 flex gap-3'>
                  <div className={`w-3 rounded-full h-3 ${count === 0 ? "bg-blue-600" : "bg-gray-300"}`} ></div>
                  <div className={`w-3 rounded-full h-3 ${count === 1 ? "bg-blue-600" : "bg-gray-300"}`} ></div>
                  <div className={`w-3 rounded-full h-3 ${count === 2 ? "bg-blue-600" : "bg-gray-300"}`} ></div>
                  <div className={`w-3 rounded-full h-3 ${count === 3 ? "bg-blue-600" : "bg-gray-300"}`} ></div>
                  <div className={`w-3 rounded-full h-3 ${count === 4 ? "bg-blue-600" : "bg-gray-300"}`} ></div>
              </div>

              <div className='flex gap-3 mt-5'>
                  <p>Infinite Scroll  </p>
                  <input type="checkbox"  checked={infinite} onChange={() => setInfinite(prev => !prev)}/>
              </div>
              <div className='flex gap-3 mt-5'>
                  <p>Autoplay </p>
                  <input type="checkbox"  checked={autoPlay} onChange={() => setAutoPlay(prev => !prev)}/>
              </div>
              <div className='flex gap-2'>
                <input type="range" min={1} max={4} value={delay} onChange={(e) => setDelay(e.target.value)} />
                <div>{delay}s</div>
              </div>
        </div>
      </div>
    </>
  )
}

export default App
