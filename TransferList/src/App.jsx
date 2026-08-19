import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [listA , setListA] = useState({
    HTML : false,
    CSS : false,
    JS : false,
    tS : false,
  })
  const [listB , setListB] = useState({
    React : false,
    Java : false,
    Taiwind : false,
    Go : false,
  })


  const moveItems = (
    source , 
    setSource , 
    desitnation,
    setDestination,
    moveAll = false
  ) => {
    const newSource = {}
    const newDestination = {...desitnation};

    Object.entries(source).forEach(([key , value])=> {
        if(moveAll || value){
          newDestination[key] = moveAll ? value : false;
        }
        else{
          newSource[key]=value;
        }
    })

    setSource(newSource);
    setDestination(newDestination);
  }

  const handleClick = (key, setList)  => {
      setList(prev => ({...prev , [key] : !prev[key]}));
  }

  const toggleBtns = (list) => {
    return !Object.values(list).some((value) => value);
  }


  return (
    <>
      <div className='bg-gray-700 text-white h-screen w-full'>
        <div className='w-full flex justify-center '>
          TranferList
        </div>

        <div className='flex justify-center mt-10 w-full'>
            <div className='flex gap-2 justify-center'>
              <div className='border w-50 h-90'>
                {Object.entries(listA).map(([key , value]) =>(
                  <div key={key}>
                      <input type="checkbox"
                      onClick={() =>  handleClick(key, setListA)}
                      checked={value} id={key} />
                      <label htmlFor={key}>{key}</label>
                  </div>
                ) )}
                </div>
                <div className='flex flex-col  gap-2'>
                    <div className='flex flex-col justify-center'>
                      <button 
                      onClick={() => moveItems(listA ,setListA , listB ,setListB , true)}
                      disabled={Object.keys(listA).length === 0}
                      className='border p-2 rounded-md bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed'>{">>"}</button>
                    
                      <button 
                      onClick={() => moveItems(listA ,setListA , listB ,setListB )}
                      disabled={toggleBtns(listA)}
                      className='border p-2 rounded-md bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed'>{">"}</button>
                  
                      <button 
                      onClick={() => moveItems(listB ,setListB  , listA ,setListA)}
                       disabled={toggleBtns(listB)}
                      className='border p-2 rounded-md bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed'>{"<"}</button>
                
                      <button 
                      onClick={() => moveItems(listB ,setListB  , listA ,setListA , true)}
                      disabled={Object.keys(listB).length === 0}
                      className='border p-2 rounded-md bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed'>{"<<"}</button>
                    </div>
                </div>
                <div className='border w-50 h-90'>
                   {Object.entries(listB).map(([key , value]) =>(
                  <div key={key}>
                      <input type="checkbox"
                      onClick={() =>  handleClick(key, setListB)}
                      checked={value} id={key} />
                      <label htmlFor={key}>{key}</label>
                  </div>
                ) )}
                </div>
              </div>
        </div>
      </div>

    </>
  )
}

export default App
