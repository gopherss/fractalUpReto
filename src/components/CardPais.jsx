import React from "react";

const CardPais = ({ image, pais, continente, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`max-w-sm rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-colors duration-300 group ${
        isSelected ? "bg-[#009CFF]" : "hover:bg-[#009CFF]"
      }`}
    >
      <div className="h-48 w-full overflow-hidden">
        <img src={image} alt={pais} className="w-full h-full object-cover" />
      </div>

      <div className="flex items-center">
        <img className="w-16 h-10 mx-4" src={image} alt="bandera-pais" />
        <div className="text-sm">
          <div
            className={`font-bold text-xl ${
              isSelected ? "text-white" : "text-[#0096FF] group-hover:text-white"
            }`}
          >
            {pais}
          </div>
          <p
            className={`text-lg font-medium ${
              isSelected ? "text-white" : "text-[#A4A4A4] group-hover:text-white"
            }`}
          >
            {continente}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPais;
