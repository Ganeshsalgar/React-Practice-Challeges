import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [outside, setOutSide] = useState(false);
  const [iconShow, setIconShow] = useState(false);
  const [escape, setEscape] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && escape) {
        setShow(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [escape]);

  const handleOpen = () => {
    setShow(true);
  };

  const handleCloseBtn = () => {
    setShow(false);
  };

  const handleOutsideClick = () => {
    if (outside) {
      setShow(false);
    }
  };

  return (
    <div className="w-full relative min-h-screen">
      <div className="text-2xl w-full flex justify-center border-b border-gray-300 shadow-md p-3">
        Modal Popup
      </div>

      <div className="flex flex-col p-10 justify-center">
        <div className="flex flex-col items-center gap-3">

          <div className="flex gap-10">
            <p>Close dialog on outside click</p>
            <input
              type="checkbox"
              checked={outside}
              onChange={() => setOutSide((prev) => !prev)}
            />
          </div>

          <div className="flex gap-10">
            <p>Close dialog on escape</p>
            <input
              type="checkbox"
              checked={escape}
              onChange={() => setEscape((prev) => !prev)}
            />
          </div>

          <div className="flex gap-10">
            <p>Show close icon</p>
            <input
              type="checkbox"
              checked={iconShow}
              onChange={() => setIconShow((prev) => !prev)}
            />
          </div>

          <div className="flex gap-10">
            <p>Show backdrop</p>
            <input
              type="checkbox"
              checked={backdrop}
              onChange={() => setBackdrop((prev) => !prev)}
            />
          </div>

          <div className="mt-2">
            <button
              className="border p-2 bg-gray-200"
              onClick={handleOpen}
            >
              Open Modal
            </button>
          </div>

        </div>
      </div>

      {show && (
        <div
          className={`fixed inset-0 flex items-center justify-center ${
            backdrop ? "bg-black/50" : ""
          }`}
          onClick={handleOutsideClick}
        >
          <div
            className="bg-white w-120 border shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5">

              <div className="flex justify-between p-3 text-2xl">
                <h1 className="text-2xl font-bold mb-3">
                  Modal Popup
                </h1>

                {iconShow && (
                  <button onClick={handleCloseBtn}>
                    &times;
                  </button>
                )}
              </div>

              <p>
                This is modal content. You can put any content here.
                This has a groovy backdrop! You can also close this
                modal by clicking outside of it or pressing the escape key.
              </p>

              <div className="flex mt-5 justify-end">
                <button
                  className="border p-2 bg-gray-200"
                  onClick={handleCloseBtn}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;