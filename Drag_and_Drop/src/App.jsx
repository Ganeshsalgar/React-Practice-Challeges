import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [selected ,setSelected] = useState(-1);
  const [images , setImages] =useState([
    "https://picsum.photos/200?pic=1",
    "https://picsum.photos/200?pic=2",
    "https://picsum.photos/200?pic=3",
    "https://picsum.photos/200?pic=4",
    "https://picsum.photos/200?pic=5",
    "https://picsum.photos/200?pic=6",
    "https://picsum.photos/200?pic=7",
    "https://picsum.photos/200?pic=8",
    "https://picsum.photos/200?pic=9",
  ])

  const [end ,setend] = useState(-1);


  console.log("selected", selected);
  console.log("end", end);
  

  const handleSelecte = (idx) => {
    setSelected(idx);
  }

  const handleEnd = () => {
    
     const newArray = [...images];
     
     const temp = newArray[selected];
     newArray[selected] = newArray[end];
     newArray[end] = temp;

     setImages(newArray);
    
  } 
  
  const handleEnter = (idx) => {
      if(selected === -1) return;
      setend(idx);
  }



  return (
    <>
      <div className='w-full min-h-screen'>
          <div className='w-full text-xl p-2 border-b flex justify-center'>Drag and Drop</div>
          <div className='flex justify-center mt-10'>
              <div className='grid grid-cols-3 gap-1'>
                  {images.map((img , idx) => (
                    <div key={idx} 
                      onDrag={() => handleSelecte(idx)}
                      onDragEnter={() => handleEnter(idx)}
                      onDragEnd={() => handleEnd(idx)}
                    
                    >
                      <img src={img} alt="" />
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </>
  )
}

export default App
