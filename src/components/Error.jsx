import React from "react";

const Error = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-red-100">
      <div
        className="bg-white border border-red-400 text-red-700 px-4 py-3 rounded shadow-lg"
        role="alert"
      >
        <strong className="font-bold">¡Error!</strong>
        <span className="block sm:inline ml-2">
          {message || "Algo salió mal. Por favor, intenta de nuevo."}
        </span>
      </div>
    </div>
  );
};

export default Error;
