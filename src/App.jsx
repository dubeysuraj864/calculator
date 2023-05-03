/* eslint-disable no-eval */
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (e) => {
    setDisplay(display.concat(e.target.name));
  };
  const allClear = () => {
    setDisplay("");
  };
  const backspace = () => {
    setDisplay(display.slice(0, display.length - 1));
  };

  const calculate = () => {
    setDisplay(eval(display));
  };

  return (
    <div className="App flex justify-center  my-20 h-full text-white">
      <div className="container w-fit md:w-fit h-[90%] m-2 rounded-xl shadow-md bg-gray-400">
        <input
          value={display}
          onChange={(e) => setDisplay(e.target.value)}
          type="text"
          className=" output w-[93%] m-2  flex justify-center items-center bg-gray-500 p-4 rounded shadow-md"
        />
        <div className="buttons flex flex-col m-2">
          <div className="row1 flex ">
            <button
              onClick={allClear}
              className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              AC
            </button>
            <div
              onClick={backspace}
              className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              C
            </div>
            <button
              name="%"
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              %
            </button>
            <button
              name="+"
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-orange-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              ÷
            </button>
          </div>
          <div className="row1 flex">
            <button
              name="1"
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              1
            </button>
            <button
              name="2"
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              2
            </button>
            <button
              name="3"
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              3
            </button>
            <button
              name="*"
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-orange-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              ×
            </button>
          </div>
          <div className="row1 flex">
            <button
              name="4"
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              4
            </button>
            <button
              name="5"
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              5
            </button>
            <button
              name="6"
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              6
            </button>
            <button
              name="-"
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-orange-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              -
            </button>
          </div>
          <div className="row1 flex">
            <button
              name="1"
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              1
            </button>
            <button
              name="2"
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              2
            </button>
            <button
              name="3"
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              3
            </button>
            <button
              name="+"
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-orange-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              +
            </button>
          </div>
          <div className="row1 flex">
            <div>
              <button
                name="0"
                onClick={handleClick}
                className="w-24 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
              >
                0
              </button>
            </div>
            <button
              name="."
              onClick={handleClick}
              className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              .
            </button>
            <button
              onClick={calculate}
              name="="
              className="w-10 h-10 flex justify-center items-center bg-orange-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
