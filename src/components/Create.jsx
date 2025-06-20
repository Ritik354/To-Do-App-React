import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Todocontext } from "../context/Todocontext";

const Create = () => {
  //add task
  const [todos, setTodos] = useContext(Todocontext);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // handle form
  const handlechange = (data) => {
    data.id = nanoid();
    data.completed = false;
    const copytodos = [...todos];
    copytodos.push(data);
    setTodos(copytodos);
    reset();
    toast.success("To Do Created!!");
  };
  return (
    <div className="w-full mb-6">
      <form onSubmit={handleSubmit(handlechange)} className="flex gap-3">
        <input
          className="flex-1 px-4 py-3 border-2 border-amber-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400 shadow-sm"
          type="text"
          placeholder="Enter your task here..."
          {...register("task", { required: "Task cannot be Empty!!" })}
        />
        <button 
          type="submit"
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center min-w-[50px]"
        >
          <span className="text-xl">+</span>
        </button>
      </form>
      {errors?.task?.message && (
        <div className="mt-2 text-red-500 text-sm font-medium bg-red-50 px-3 py-2 rounded-md border border-red-200">
          {errors.task.message}
        </div>
      )}
    </div>
  );
};

export default Create;