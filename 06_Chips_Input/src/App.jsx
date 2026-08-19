import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState([]);
  const [input , setInput] = useState("");



  const handleEnter = (e) => {
    
    if(input === "") return;
    if(e.key === "Enter"){
      e.preventDefault();
      setInput("");
      setCount(prev => [...prev, { id: Date.now(), input }]);
    }
    
  }

  const handleDelete = (id) => {
    const newArray = count.filter((prev) => prev.id !== id);
    console.log(newArray);
    setCount(newArray);
    
  }

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="border-b p-3 text-2xl shadow-lg flex justify-center">
          Chips Input
        </div>
        <div className="flex  flex-col items-center p-10">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleEnter}
            className="border w-full rounded-sm p-2"
            placeholder="Type & hit Enter"
          />
        </div>
        <div className="px-10">
          {count.length > 0 && (
            <div className="flex gap-2 w-full flex flex-wrap">
              {count.map((item) => (
                <div className="border border-gray-300 px-2 pl-4 bg-gray-100 rounded-3xl">{item.input}
                  <span className="text-red-800 text-2xl px-3 cursor-pointer" onClick={() => handleDelete(item.id)}>&times;</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
