import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Todocontext } from "../context/Todocontext";
import confetti from "canvas-confetti";
const Read = () => {
  const [todos, setTodos] = useContext(Todocontext);

  //delete task
  const deltask = (id) => {
    const newtodos = todos.filter((data) => data.id != id);
    setTodos(newtodos);
    toast.info("Task Deleted!!");
  };
  //set completed
  const handlecompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    // 🔔 Toast notification
    const updatedTodo = updatedTodos.find((todo) => todo.id === id);

    // 🔔 Toast notification
    if (updatedTodo.completed) {
      toast.success("Task marked as completed!");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FFD700", "#FF69B4", "#00CED1", "#FF6347", "#9370DB"],
      });
    } else {
      toast.info("Task marked as not completed!");
    }

    setTodos(updatedTodos);
  };

  //view todo
  const todo = (
    <div className="space-y-3">
      {todos.length === 0 ? (
        <div className="text-center py-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-dashed border-amber-300">
          <div className="text-6xl mb-6 animate-bounce">📝</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">
            No tasks yet!
          </h3>
          <p className="text-gray-500 text-lg">
            Add your first task above to get started
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {todos.map((data) => (
            <div
              key={data.id}
              className="bg-white rounded-lg p-4 shadow-sm border border-amber-200 hover:shadow-md transition-all duration-200 flex items-center gap-4"
            >
              {/* Custom Checkbox */}
              <div className="flex-shrink-0 relative">
          <input
            type="checkbox"
            checked={data.completed}
            onChange={() => handlecompleted(data.id)}
            className="sr-only"
          />
          <div 
            onClick={() => handlecompleted(data.id)}
            className={`w-7 h-7 rounded-full border-3 cursor-pointer transition-all duration-300 flex items-center justify-center ${
              data.completed
                ? 'bg-gradient-to-r from-green-400 to-green-600 border-green-500 shadow-lg'
                : 'border-amber-400 hover:border-amber-500 hover:bg-amber-50 shadow-md'
            }`}
          >
            {data.completed && (
              <span className="text-white text-lg font-bold">✓</span>
            )}
          </div>
        </div>

              {/* Task Text */}
              <div className="flex-1">
                <span
                  className={`text-xl font-medium transition-all duration-300 ${
                    data.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800 group-hover:text-gray-900"
                  }`}
                >
                  {data.task}
                </span>
              </div>

              {/* Status Badge */}
              <div className="flex-shrink-0">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold shadow-md transition-all duration-300 ${
                    data.completed
                      ? "bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300"
                      : "bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border border-amber-300"
                  }`}
                >
                  {data.completed ? "✅ Done" : "⏳ Pending"}
                </span>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => deltask(data.id)}
                className="flex-shrink-0 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 flex items-center gap-2 group"
              >
                <span className="text-sm font-bold group-hover:rotate-12 transition-transform duration-300">
                  🗑️
                </span>
                <span className="text-sm font-bold hidden sm:inline">
                  Delete
                </span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return <div className="mt-4">{todo}</div>;
};

export default Read;
