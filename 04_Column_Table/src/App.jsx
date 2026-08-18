import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  const arr = Array.from({ length: rows })
    .fill("")
    .map((row) => Array.from({ length: cols }).fill(""));

  console.log(arr);

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full text-2xl flex justify-center border-b p-2 shadow-md">
          Column Table
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="pt-10 flex gap-3">
            <div className="flex gap-3">
              <h1>Rows : </h1>
              <input
                type="range"
                min={2}
                max={8}
                value={rows}
                onChange={(e) => setRows(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <h1>Columns : </h1>
              <input
                type="range"
                min={2}
                max={8}
                value={cols}
                onChange={(e) => setCols(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10 justify-center">
          {arr.map((row, rowIdx) => (
            <div key={rowIdx} className="flex">
              {row.map((col, colIdx) => {
                const number =
                  colIdx % 2 === 0
                    ? colIdx * rows + rowIdx + 1
                    : (colIdx + 1) * rows - rowIdx;
                return <div className="w-10 h-10 border flex justify-center items-center m-[1px]">{number}</div>;
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
