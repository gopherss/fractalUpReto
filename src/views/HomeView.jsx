import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import CardPais from "../components/CardPais";
import Cargando from "../components/Cargando";
import Error from "../components/Error";
import useImagesData from "../hooks/useImagesData";
import CONTINENTIMAGES from "../constant/imagenesLista";

const HomeView = () => {
  const {
    loading,
    error,
    data,
    images,
    setSearchQuery,
    searchQuery,
    showDropdown,
    selectedCountry,
    filteredCountries,
    handleContinentSelect,
    handleCountryClick,
    closeModal,
    setShowDropdown,
  } = useImagesData();

  if (loading) return <Cargando />;
  if (error) return <Error message={error.message} />;

  return (
    <>
      <div className="flex items-center bg-white justify-between w-full max-w-3xl mx-auto p-3 border shadow-xl rounded-full relative">
        <div className="flex justify-between items-center w-full">
          <div className="col-span-1 px-3 w-2/3">
            <div className="flex flex-col">
              <label
                className="text-[#848484] text-base font-medium"
                htmlFor="country-buscar"
              >
                País
              </label>
              <div className="flex items-center border-b-2 border-transparent focus-within:border-[#5CC0FF] py-1">
                <input
                  id="country-buscar"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Escribe el país que deseas ver"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onClick={() => setShowDropdown(!showDropdown)}
                />
              </div>
              {showDropdown && (
                <ul className="absolute bg-white border mt-24 w-full max-w-lg shadow-xl rounded-3xl grid grid-cols-3 gap-4 p-4">
                  <li className="p-2 cursor-pointer col-span-3">
                    <div className="flex justify-between">
                      <span className="text-[#939393] font-semibold text-xl">
                        Filtrar por continentes
                      </span>
                      <span
                        onClick={() => handleContinentSelect("")}
                        className="text-[#059EFF] font-semibold text-xl"
                      >
                        Limpiar
                      </span>
                    </div>
                  </li>
                  {Object.keys(CONTINENTIMAGES).map((continent) => (
                    <li
                      key={continent}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleContinentSelect(continent)}
                    >
                      <img
                        src={CONTINENTIMAGES[continent]}
                        alt={continent}
                        className="inline w-60 h-20 mr-2"
                      />
                      {continent}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="w-2/3"></div>

          <div className="flex justify-end items-center px-2 w-1/3">
            <button className="bg-[#009CFF] text-white py-2 px-4 text-lg rounded-full hover:bg-blue-600 focus:outline-none flex items-center">
              <FontAwesomeIcon icon={faSearch} className="h-5 w-5 mr-2" />
              Buscar
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-4 mt-20">
        {filteredCountries.map((pais, index) => (
          <CardPais
            key={index}
            image={images[index]}
            pais={pais.name}
            continente={pais.continent.name}
            isSelected={selectedCountry?.name === pais.name}
            onClick={() => handleCountryClick(pais)}
          />
        ))}
      </div>

      {selectedCountry && (
        <div className="fixed bottom-4 right-4 w-80 h-2/3 bg-white p-4 shadow-lg">
          <div className="flex justify-between items-center">
            <div></div>
            <button onClick={closeModal}>
              <FontAwesomeIcon
                icon={faTimes}
                className="text-gray-600 h-5 w-5"
              />
            </button>
          </div>

          <div className="mt-4">
            <img
              src={images[filteredCountries.indexOf(selectedCountry)]}
              alt={selectedCountry.name}
              className="w-full h-40 object-cover rounded-xl"
            />

            <div className="flex items-end">
              <img
                className="w-16 h-10  mx-4"
                src={images[filteredCountries.indexOf(selectedCountry)]}
                alt="bandera-pais"
              />
              <div className="text-sm">
                <div className="font-bold text-xl text-[#0096FF]">
                  {selectedCountry.name}
                </div>
                <p className="text-[#A4A4A4] text-lg font-medium">
                  {selectedCountry.continent.name}
                </p>
              </div>
            </div>
            <p className="text-gray-600">
              <strong className="text-[#16A3FF] font-bold text-lg">
                Capital:
              </strong>{" "}
              {selectedCountry.capital || "N/A"}
            </p>
            <p className="text-gray-600">
              <strong className="text-[#16A3FF] font-bold text-lg">
                Lenguaje:
              </strong>{" "}
              {selectedCountry.languages[0]?.name || "N/A"}
            </p>
            <p className="text-gray-600">
              <strong className="text-[#16A3FF] font-bold text-lg">
                Población:
              </strong>{" "}
              {selectedCountry.population
                ? selectedCountry.population.toLocaleString()
                : "N/A"}
            </p>
            <p className="text-gray-600">
              <strong className="text-[#16A3FF] font-bold text-lg">
                Moneda:
              </strong>{" "}
              {selectedCountry.currency || "N/A"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeView;
