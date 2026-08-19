// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [step, setStep] = useState([])
//   const [back , setBack] = useState(false);

//   console.log(step);
  


//   const HandleOnClick = (index) => {
//       if(step.includes(index)) return;
//       setStep((prev) => [...prev , index ]);
//   }

//   useEffect(() => {
//     if(step.length !== 9. || !setBack) return;
//     console.log("called");
    
//     const undo = async () => {
      
//       setBack(true);

//       for(let i = step.length -1 ; i >=0 ; i--){
//         const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//         await delay(300);
//          setStep((prev) => prev.slice(0, -1));
//       }
//       setBack(false);

//     }

//     undo();
//   } , [step.length])

//   return (
//     <>
//       <div className='w-full h-screen bg-gray-950 text-white'>
//         <div className='w-full flex justify-center border-b p-3'>Grid Box</div>


//         <div className='flex mt-30 justify-center'>
//            <div className='grid grid-cols-3 gap-3'>
//                {Array.from({length : 9}).map((item , index) => (
//                 <button
//                 onClick={() => HandleOnClick(index)}
//                 className={`border w-40 h-40 ${
//                   step.includes(index) ? "bg-green-500" : ""
//                 }`}
//                 >{index}</button>
//             ))}
//            </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'

const App = () => {

  // const timers = [5,2,3];
  // const [index , setIndex] = useState(0);
  // const [delay , setDelay] = useState(timers[index]) ;


  // useEffect(()=>{

  //   const timeID = setInterval(()=>{
  //      let newDelay = delay ;
  //      newDelay-- ;
  //      setDelay(newDelay);
  //     },1000)

  //     if(delay === 0)
  //     {
  //       let newIndex = index ;
  //       newIndex-- ;
  //       if(newIndex < 0)
  //       {
  //         newIndex = 2 ;
  //       }

  //       setIndex(newIndex) ;
  //       setDelay(timers[newIndex]);
  //     }

  //     return ()=>{clearInterval(timeID)}
  // },[index , delay])

  // return (
  //   <>
  //   <header className='flex justify-center text-4xl font-medium py-4 shadow-md'>Traffic Lights</header>

  //   <main className='flex flex-col items-center mt-4 gap-3'>
  //     <div className='w-30 h-86 bg-black rounded-3xl flex flex-col items-center gap-5 py-8'>
  //        <div className={`w-20 h-20 rounded-full ${index === 0 ? "bg-red-600" : "bg-gray-500"}`}></div>
  //         <div className={`w-20 h-20 rounded-full ${index === 1 ? "bg-yellow-400" : "bg-gray-500"}`}></div>
  //          <div className={`w-20 h-20 rounded-full ${index === 2 ? "bg-green-600" : "bg-gray-500"}`}></div>
  //     </div>

  //     <p className='font-bold text-lg'>{delay} Seconds</p>
  //   </main>
    // </>
  // )

    const timers = [5,2,3];
    const [index , setIndex] = useState(0);
    const [delay , setDelay] = useState(timers[index]);

    console.log(delay);
    

    useEffect(() => {
        const timersDelay = setInterval(() => {
            let newDelay = delay;
            newDelay--;
            setDelay(newDelay);
        } , 1000)

        if(delay === 0){
          let newIndex = index;
          newIndex--;
          if(newIndex < 0){
             newIndex = 2;
          }
          setIndex(newIndex);
          setDelay(timers[newIndex]);
        }

        return () => clearInterval(timersDelay);



    } , [index , delay])

    return(
      <>
        <div className='flex text-white bg-black w-full min-h-screen flex-col justify-center items-center gap-3'>
            <div className={`w-20 h-20 border rounded-full ${index === 0 ? "bg-red-600" : "bg-gray-400"}`}></div>
            <div className={`w-20 h-20 border rounded-full ${index === 1 ? "bg-yellow-300" : "bg-gray-400"}`}></div>
            <div className={`w-20 h-20 border rounded-full ${index === 2 ? "bg-green-600" : "bg-gray-400"}`}></div>


            <div className='text-xl font-bold mt-10'>{delay} seconds</div>
        </div>
      </>
    )
}

export default App
