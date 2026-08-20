import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [showToast, setShowToast] = useState(true);
  const [input, setInput] = useState("This is a toast message!");
  const [horizontally, setHorizontally] = useState("left");
  const [type, setType] = useState("success");
  const [vertically, setVertically] = useState("top");
  const [delay, setDelay] = useState(5);
  const [down ,  setDown]  = useState(25)
  const [up , setUp] = useState(10);

  const handleShow = () => {
    setShowToast(true);
    
  };

  const position = `
  ${vertically === "top" ? `top-${down}` : `bottom-${up}`} ${horizontally === "left" ? "left-10" : "right-10"}
  `;

  const colors = {
    normal: "bg-gray-200",
    success: "bg-green-200",
    error: "bg-red-300",
    warning: "bg-yellow-100",
    info: "bg-blue-100",
  };


  useEffect(() => {
      if(!showToast) return;
      setTimeout(() => {
          setShowToast(false);
      } , delay * 1000)
  } , [showToast])

  console.log(delay);

  return (
    <>
      <div>
        <div className="text-3xl border-b shadow-md p-3">Toast PopUp</div>
        <div className="mt-10 ">
          <div className="p-2">
            <select
              className="border p-2 w-90"
              value={horizontally}
              onChange={(e) => setHorizontally(e.target.value)}
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
          <div className="p-2">
            <select
              className="border p-2 w-90"
              value={vertically}
              onChange={(e) => setVertically(e.target.value)}
            >
              <option value="top">Top</option>
              <option value="down">Down</option>
            </select>
          </div>
          <div className="p-2">
            <select
              className="border p-2 w-90"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="success" selected>
                Success
              </option>
              <option value="error">Error</option>
              <option value="warning">Warning</option>
              <option value="info">Info</option>
            </select>
          </div>

          <input
            type="text"
            className="w-90 border mt-2 p-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="mt-10">
            <input
              type="range"
              min={2}
              max={7}
              value={delay}
              onChange={(e) => setDelay(e.target.value)}
            />
            <div>{delay}s</div>
          </div>

          <div className="mt-5">
            <button className="bg-blue-600 p-2 rounded-md" onClick={handleShow}>
              Show Toast
            </button>
          </div>
        </div>
        <div>
          {showToast && (
            <div>
              <div
                className={` w-70 h-auto border p-2 text-black fixed ${position} rounded-md ${colors[type]}`}
              >
                {input}
                <span className="pl-10" onClick={() => setShowToast(false)}>
                  &times;
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
