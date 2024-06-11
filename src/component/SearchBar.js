import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSelectedcurrency } from '../redux/slice/defaulslice';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCoins = async (searchQuery) => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
                const coins = response.data;
                const filteredCoins = coins.filter(
                    (coin) =>
                        coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setSuggestions(filteredCoins.slice(0, 20)); // Show top 20 suggestions
            } catch (error) {
                console.error("Error fetching coin data:", error);
            }
        };

        const debouncedFetchCoins = debounce(fetchCoins, 500);

        if (query) {
            debouncedFetchCoins(query);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }

        // Cleanup the debounce function on component unmount
        return () => {
            debouncedFetchCoins.cancel();
        };
    }, [query]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.name);
        setShowSuggestions(false);
        dispatch(setSelectedcurrency(suggestion.id));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Directly use the fetchCoins function as it's already debounced and handled within useEffect
    };

    return (
        <div className="relative mx-auto mt-5">
            <form onSubmit={handleSearch} className="flex items-center mb-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search for a coin..."
                        className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none"
                    />
                    <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
            </form>
            {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto">
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion.id}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                        >
                            {suggestion.name} ({suggestion.symbol.toUpperCase()})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
