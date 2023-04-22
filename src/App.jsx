function App() {
  return (
    <div className="App flex justify-center  my-20 h-full text-white">
      <div className="container w-fit md:w-fit h-[90%] m-2 rounded-xl shadow-md bg-gray-400">
        <div className="output m-2 bg-gray-500 p-4 rounded shadow-md">0</div>
        <div className="buttons flex flex-col m-2">
          <div className="row1 flex ">
            <div className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              AC
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              +/-
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              %
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-orange-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              ÷
            </div>
          </div>
          <div className="row1 flex">
            <div className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              1
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              2
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              3
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-orange-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
            ×

            </div>
          </div>
          <div className="row1 flex">
            <div className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
            4
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              5
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              6
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-orange-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              -
            </div>
          </div>
          <div className="row1 flex">
            <div className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              1
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              2
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              3
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-orange-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              +
            </div>
          </div>
          <div className="row1 flex">
          <div>
          <div className="w-24 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              0
            </div>
          
          </div>
            <div className="w-10 h-10 flex justify-center items-center bg-gray-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              .
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-orange-500 rounded-full m-2 cursor-pointer hover:shadow-none shadow-md transition-all">
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
