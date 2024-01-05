import React from "react";
import TodoForm from "./Todo-form";
export default function TodoWrapper() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1A1A40]  mt-20 p-8 px-16 rounded-md w-full">
      <h1 className="text-3xl text-white font-semibold">Get Things Done!</h1>
      <TodoForm></TodoForm>
    </div>
  );
}
