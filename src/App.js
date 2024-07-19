import React, { useState } from "react";

function App() {
  // bg is a variable & setBg is a call back function
  const [bg, setBg] = useState("#EC4899");
  const [count, setCount] = useState(0);
  const [colorName, setColorName] = useState("Pink");

  const handleColor = (color, colorName) => {
    if(bg === color){
      setColorName("Oops!!! Same color");
    }else{
      setBg(color);
      setColorName(colorName);
      setCount(count + 1);
    }
  };

  const reset = (bg, count, name) => {
    setCount(count);
    setBg(bg);
    setColorName(name);
  };

  return (
    <>
      <div
        className="w-[100%] h-[100vh] flex items-center justify-center flex-col"
        style={{ backgroundColor: bg }}
      >
        {/* <label className="text-white">JMK</label> */}
        <label className="text-white text-6xl font-semibold drop-shadow-xl">
          {colorName}
        </label>
        <label className="text-white text-xl font-medium mt-3">
          BG changed: {count} times |{" "}
          <button
            className="font-medium text-sm border-2 pb-1 px-2 rounded-sm hover:bg-white hover:text-blue-600 transition duration-150 ease-out hover:ease-in"
            onClick={() => {
              reset("#EC4899", 0, "Pink");
            }}
          >
            Reset
          </button>
        </label>

        <div className="bg-white rounded-full p-2 flex gap-1 shadow-xl mt-4">
          <button
            className="bg-blue-900 w-[50px] h-[50px] rounded-full border-2 shadow-lg"
            onClick={() => {
              handleColor("#1E3A8A", "Blue");
            }}
          ></button>

          <button
            className="bg-green-600 w-[50px] h-[50px] rounded-full border-2 shadow-lg"
            onClick={() => {
              handleColor("#16A34A", "Green");
            }}
          ></button>

          <button
            className="bg-red-500 w-[50px] h-[50px] rounded-full border-2 shadow-lg"
            onClick={() => {
              handleColor("#EF4444", "Red");
            }}
          ></button>

          <button
            className="bg-yellow-500 w-[50px] h-[50px] rounded-full border-2 shadow-lg"
            onClick={() => {
              handleColor("#EAB308", "Yellow");
            }}
          ></button>
        </div>
      </div>
    </>
  );
}

export default App;
