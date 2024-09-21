import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import GET_PAISES from "../api/ApolloApi";

const useImagesData = () => {
    const { loading, error, data } = useQuery(GET_PAISES);
    const [images, setImages] = useState([]);
    const [continentFilter, setContinentFilter] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const filteredCountries =
        data?.countries.filter((pais) => {
            const matchesContinent = continentFilter
                ? pais.continent.name === continentFilter
                : true;
            const matchesSearch = searchQuery
                ? pais.name.toLowerCase().includes(searchQuery.toLowerCase())
                : true;
            return matchesContinent && matchesSearch;
        }) || [];

    const handleContinentSelect = (continent) => {
        setContinentFilter(continent);
        setShowDropdown(false);
    };

    const handleCountryClick = (pais) => {
        setSelectedCountry(pais);
    };

    const closeModal = () => {
        setSelectedCountry(null);
    };

    useEffect(() => {
        if (data) {
            const obtenerImagenes = async () => {
                const nombrePaises = data.countries.map((pais) => pais.name);

                const listaImagenes = nombrePaises.map(async (pais) => {
                    const QUERY_PAIS = `https://pixabay.com/api/?key=${import.meta.env.VITE_KEY_PIXABAY}&q=${pais}&image_type=photo&lang=es&per_page=3&page=1`

                    const response = await fetch(QUERY_PAIS);

                    const result = await response.json();

                    return result.hits && result.hits.length > 0
                        ? result.hits[0].largeImageURL
                        : "default_image_url";;
                });

                const peticionImages = await Promise.all(listaImagenes);

                setImages(peticionImages);
            };

            obtenerImagenes();
        }
    }, [data]);

    return {
        loading, error, data,
        images, setSearchQuery, searchQuery,
        showDropdown, selectedCountry,
        filteredCountries, handleContinentSelect,
        handleCountryClick, closeModal, setShowDropdown
    }
}

export default useImagesData
