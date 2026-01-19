import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/features/counterSlice";

const App = () => {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="min-h-screen flex items-center justify-center from-slate-900 to-slate-800">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-xl p-8 w-80 text-center">

        <h1 className="text-2xl font-semibold text-white mb-6">
          Counter App
        </h1>

        <div className="text-6xl font-bold text-cyan-400 mb-8">
          {count}
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => dispatch(decrement())}
            className="flex-1 bg-red-600 hover:bg-red-500 active:scale-95 transition-all text-white py-3 rounded-xl font-medium"
          >
            Decrement
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="flex-1 bg-green-600 hover:bg-green-500 active:scale-95 transition-all text-white py-3 rounded-xl font-medium"
          >
            Increment
          </button>
        </div>

      </div>
    </div>
  );
};

export default App;
