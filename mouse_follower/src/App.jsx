import { useEffect, useState } from "react";

function App() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [speed, setSpeed] = useState(0.1);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (mouse.x - prev.x) * speed,
        y: prev.y + (mouse.y - prev.y) * speed,
      }));

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [mouse, speed]);

  return (
    <div
      className={`relative w-screen h-screen bg-black ${
        showCursor ? "cursor-auto" : "cursor-none"
      }`}
    >
      <div
        className="fixed w-8 h-8 rounded-full bg-white pointer-events-none z-10"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="fixed top-10 left-10 z-20 w-72 rounded-xl bg-white p-5 cursor-auto">
        <div className="mb-4">
          <label className="mb-2 block font-semibold">
            Speed: {speed.toFixed(2)}
          </label>

          <input
            type="range"
            min="0.01"
            max="1"
            step="0.01"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <label className="flex items-center gap-2 font-semibold">
          <input
            type="checkbox"
            checked={showCursor}
            onChange={(e) => setShowCursor(e.target.checked)}
          />

          Show Original Cursor
        </label>
      </div>
    </div>
  );
}

export default App;
