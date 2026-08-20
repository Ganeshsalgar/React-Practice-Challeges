import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(0);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  console.log(data);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
      );
      const values = await res.json();
      setData((prev) => [...prev, ...values]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = () => {
    const browserHeight = window.innerHeight;
    const entrieHeight = document.documentElement.scrollHeight;
    const barHight = document.documentElement.scrollTop;

    console.log("entrie", entrieHeight);
    console.log("Browser", browserHeight);
    console.log("barHeight", barHight);
    try {
      if (barHight + browserHeight >= entrieHeight) {
        console.log("fetch");

        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full text-white min-h-screen">
        <div className="w-full flex justify-center border-b border-gray-300 p-3 shadow-lg">
          Infnite Scroll
        </div>
        <div className="flex w-full flex-col items-center">
          {data.length > 0 && (
            <div className="w-full p-10">
              {data.map((item) => (
                <div>
                  <div className="bg-gray-200 p-3 m-3 flex justify-start rounded-md text-black">
                    <div className="px-2">{item.id}</div>
                  </div>
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
