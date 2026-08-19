import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setSec(prevSec => {
        if (prevSec === 59) {
          setMin(prevMin => {
            if (prevMin === 59) {
              setHour(prevHour => prevHour + 1);
              return 0;
            }

            return prevMin + 1;
          });

          return 0;
        }

        return prevSec + 1;
      });
    }, 10);

    return () => clearInterval(id);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSec(0);
    setMin(0);
    setHour(0);
  };

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="flex justify-center border-b shadow-lg border-gray-300 text-2xl p-2">
          Stop Watch
        </div>

        <div className="flex justify-center mt-10">
          <div className="border border-gray-200 shadow-xl w-70 h-70 bg-gray-200 rounded-full flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-amber-700">
              Stop Watch
            </h1>

            <h1 className="text-4xl font-bold text-red-700">
              {String(hour).padStart(2, "0")} :{" "}
              {String(min).padStart(2, "0")} :{" "}
              {String(sec).padStart(2, "0")}
            </h1>

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleStart}
                className="bg-blue-600 text-white rounded-lg px-2 py-1"
              >
                START
              </button>

              <button
                onClick={handlePause}
                className="bg-yellow-600 text-white rounded-lg px-2 py-1"
              >
                PAUSE
              </button>

              <button
                onClick={handleReset}
                className="bg-red-600 text-white rounded-lg px-2 py-1"
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;