// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const [show ,setShow] = useState([]);
//    const values = ["A", "B", "C", "D", "E", "F", "G", "H"]

//   const [cards ,setCards] = useState();

//   console.log(show);

//   const handleSetShow = (index) => {
//       setShow((prev) => {
//         if(prev.length === 0){
//           return [index];
//         }
//         else if(prev.length <= 2){
//           if(prev.includes(index)){
//             return prev;
//           }
//           return ([...prev , index])
//         }
//         else{
//           return [];
//         }
        
//       });
//   }

//   useEffect(() => {
//     setCards([...values, ...values].sort(() => Math.random() - 0.5));
//   }, [])
  
//   return (
//     <>
//       <div className='w-full min-h-screen'>
//         <div className='w-full border-b border-gray-200 shadow-lg flex justify-center text-2xl p-4'>Match Pairs</div>
//         <div className='flex justify-center mt-10'>
//             <div className='grid grid-cols-4 gap-1 w-50'>
//               {
//                 cards.length > 0 && cards.map((item , index) => (
//                   <button
//                   onClick={() => handleSetShow(index)}
//                   className='bg-yellow-200 block rounded-lg shadow-2xl transform:rotateY(180deg) w-10 h-10'
//                   >{show.length > 0 && show.includes(index) ? `${arr[index]}` : ""}</button>
//                 ))
//               }
//             </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

import { memo, useEffect, useState } from "react";
import "./App.css";

const values = ["A", "B", "C", "D", "E", "F", "G", "H"];

const Card = memo(function Card({ value, isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-200 rounded-lg shadow-2xl w-20 h-20 text-2xl"
    >
      {isOpen ? value : ""}
    </button>
  );
});

function App() {
  const [cards, setCards] = useState(() =>
    [...values, ...values].sort(() => Math.random() - 0.5)
  );

  const [show, setShow] = useState([]);
  const [matched, setMatched] = useState([]);

  const handleCardClick = (index) => {
    if (show.length === 2) return;

    if (show.includes(index)) return;

    if (matched.includes(index)) return;

    setShow((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (show.length !== 2) return;

    const [firstIndex, secondIndex] = show;

    if (cards[firstIndex] === cards[secondIndex]) {
      setMatched((prev) => [...prev, firstIndex, secondIndex]);
      setShow([]);
    } else {
      const timer = setTimeout(() => {
        setShow([]);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [show, cards]);

  const shuffleCards = () => {
    setCards([...values, ...values].sort(() => Math.random() - 0.5));
    setShow([]);
    setMatched([]);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-full border-b border-gray-200 shadow-lg flex justify-center text-2xl p-4">
        Match Pairs
      </div>

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-4 gap-2">
          {cards.map((item, index) => {
            const isOpen =
              show.includes(index) || matched.includes(index);

            return (
              <Card
                key={index}
                value={item}
                isOpen={isOpen}
                onClick={() => handleCardClick(index)}
              />
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <button
          onClick={shuffleCards}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default App;