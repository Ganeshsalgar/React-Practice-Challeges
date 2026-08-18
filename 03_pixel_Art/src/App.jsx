import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useRef } from "react";


const colors = [
  "bg-red-500",
  "bg-orange-500",
  "bg-amber-500",
  "bg-yellow-500",
  "bg-lime-500",
  "bg-green-500",
  "bg-emerald-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-sky-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-violet-500",
  "bg-purple-500",
  "bg-fuchsia-500",
  "bg-pink-500",
  "bg-rose-500",
  "bg-red-600",
  "bg-orange-600",
  "bg-yellow-600",
  "bg-green-600",
  "bg-emerald-600",
  "bg-teal-600",
  "bg-cyan-600",
  "bg-sky-600",
  "bg-blue-600",
  "bg-indigo-600",
  "bg-violet-600",
  "bg-purple-600",
  "bg-fuchsia-600",
  "bg-pink-600",
  "bg-rose-600",
  "bg-red-700",
  "bg-orange-700",
  "bg-yellow-700",
  "bg-green-700",
  "bg-teal-700",
  "bg-blue-700",
  "bg-indigo-700",
  "bg-purple-700",
  "bg-pink-700",
  "bg-gray-500",
  "bg-gray-700",
  "bg-black"
];

function App() {
  const [selectedColor, setSelectedColor] = useState("");
  const [colorBox , setColorBox] = useState([]);
  const drag = useRef(false);

  const arr = Array.from({ length: 22 })
    .fill("")
    .map(() => Array.from({ length: 44 }).fill(""));


  // console.log(selectedColor);
  // console.log(selectedColor);
  
  

  

  // arr[arr.length-1].map((_ , idx) => {
  //   arr[arr.length-1][idx] = colors[idx];
  // });
  // console.log(arr);

  const handleCLick = (color) => {
    // console.log(color);
    
    setSelectedColor(color)
  }

  // console.log(colorBox);s
  
  
  


  const handleUp = () => {
    drag.current = false;
  }
  const handleDown = (row , col) => {
    // if(colorBox.includes(`${row}${col}`)) return;
    if(selectedColor === "") return
    drag.current = true;
    setColorBox((prev) => {
      return([
        ...prev , 
        `${row}${col},${selectedColor}`
      ])
    })
  }

 const handleEnter = (row, col) => {
  if (drag.current === false) return;

  const position = `${row}${col}`;

  setColorBox((prev) => {
    const exists = prev.some((item) => {
      const [currentPosition] = item.split(",");
      return currentPosition === position;
    });

    if (exists) {
      return prev.map((item) => {
        const [currentPosition] = item.split(",");

        return currentPosition === position
          ? `${position},${selectedColor}`
          : item;
      });
    }

    return [...prev, `${position},${selectedColor}`];
  });
};

  const includeColor = (row , col) => {
      const newArray = colorBox.map((item) => item);
      for(let i = 0; i < newArray.length; i++){
        const CurrColor = newArray[i].split(',');
        if(CurrColor.includes(`${row}${col}`)){
          return CurrColor[1];
        }
         
      }
      return "";

      
  }


  

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full flex justify-center text-2xl border-b "  >
          Pixel Art
        </div>
        <div className="flex flex-col items-center w-full" onMouseUp={() => handleUp()}>
          <div className="p-10 pb-0">
            {arr.map((row, rowIdx) => (
              <div className="flex" key={rowIdx}>
                {row.map((col, colIndx) =>{ 
                  const CurrColor = includeColor(rowIdx , colIndx)
                return(
                  <button 
                  key={colIndx}
                  onMouseEnter={() => handleEnter(rowIdx , colIndx)}
                  onMouseDown={() => handleDown(rowIdx , colIndx)}
                  className={`w-7 block h-7 border border-gray-300 ${CurrColor === "" ? "" : CurrColor}  `}>{""}</button>
                )})}
              </div>
            ))}
          </div>
          <div className="flex">
            {
              colors.map((color) => (
                <button
                key={color}
                  onClick={() => handleCLick(color)}
                className={`w-7 block h-7 border border-gray-300 ${color}`}>{""}</button>
              ))
            }
          </div>
        
        </div>
      </div>
    </>
  );
}

export default App;
