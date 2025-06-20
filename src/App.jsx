import React from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import Wrapper from "./components/Wrapper";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 animate-gradient-x flex justify-center items-center p-4">
      <div className="w-full max-w-2xl bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-2xl p-8 border border-amber-100">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-amber-400 via-amber-600 to-orange-500 bg-clip-text text-transparent drop-shadow-md animate-gradient-x bg-[length:200%_auto] bg-left transition-all duration-1000">
            My Todo App
          </h1>

          <p className="mt-3 text-base sm:text-lg text-gray-700 dark:text-gray-700 tracking-wide font-medium">
            Stay organized and productive
          </p>

          <div className="w-28 h-1 mt-4 mx-auto bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 rounded-full shadow-inner animate-pulse" />
        </div>

        {/* Create & Read Section */}
        <Wrapper>
          <div className="flex flex-col gap-6">
            <Create />
            <div className="h-80 overflow-y-auto ">
              <Read />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default App;
