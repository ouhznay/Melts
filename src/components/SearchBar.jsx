import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

export const SearchBar = ({setResults}) => {
  const [input, setInput] = useState('');

  const fetchData =(value) => {
    // replace with deployed api link
    fetch("http://127.0.0.1:5000/api/modules/")
    .then((response)=> response.json())
    .then(json => {
        console.log(json);
        const results = json.filter((user)=> {
            return value && 
            user && 
            user.details && //check attribute name 
            user.name.toLowerCase().includes(value)
        });
        console.log(results)
        setResults(results);
    });
  }

  const handleChange = (value) => { 
    setInput(value);
    fetchData(value);
  }
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

