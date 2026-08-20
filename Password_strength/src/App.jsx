import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setNumber(/[0-9]/.test(input));
    setLowercase(/[a-z]/.test(input));
    setUppercase(/[A-Z]/.test(input));
    setSymbol(/[!@#$%^&*(){}<>?]/.test(input));
  }, [input]);

  const strength =
    Number(lowercase) +
    Number(uppercase) +
    Number(number) +
    Number(symbol);

  const strengthWidth = strength * 25;

  const getStrengthText = () => {
    if (input.length === 0) {
      return "Enter Password";
    }

    if (strength === 1) {
      return "Very Weak";
    }

    if (strength === 2) {
      return "Weak";
    }

    if (strength === 3) {
      return "Medium";
    }

    if (strength === 4) {
      return "Strong";
    }
  };

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full flex justify-center border-b border-gray-300 p-3 text-2xl">
          Password Strength
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-2xl p-10">
            <input
              type="password"
              value={input}
              onChange={handleOnChange}
              className="border border-gray-300 p-3 rounded-md w-full outline-none focus:border-blue-500"
              placeholder="Enter Your Password"
            />

            <div className="flex justify-between mt-2">
              <div
                className={`text-sm p-1 ${
                  lowercase ? "text-green-600" : "text-gray-400"
                }`}
              >
                Lowercase
              </div>

              <div
                className={`text-sm p-1 ${
                  uppercase ? "text-green-600" : "text-gray-400"
                }`}
              >
                Uppercase
              </div>

              <div
                className={`text-sm p-1 ${
                  number ? "text-green-600" : "text-gray-400"
                }`}
              >
                Number
              </div>

              <div
                className={`text-sm p-1 ${
                  symbol ? "text-green-600" : "text-gray-400"
                }`}
              >
                Symbol
              </div>
            </div>

            <div className="p-2">
              <div className="w-full h-3 border border-gray-300 rounded-2xl">
                <div
                  className={`h-full rounded-md transition-all duration-300 ${
                    strength <= 1
                      ? "bg-red-500"
                      : strength === 2
                      ? "bg-orange-500"
                      : strength === 3
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                  style={{
                    width: `${strengthWidth}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="flex justify-center mt-2">
              <div>
                Password has{" "}
                <span className="font-bold">{input.length}</span> chars
              </div>
            </div>

            <div className="flex justify-center mt-2">
              <div>
                Your Password is{" "}
                <span className="font-bold">{getStrengthText()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;