import React from 'react'
import '../App.css';
import Sidebar from './Sidebar'
import Main from './Main'
import User from './User'
import AddNewTodo from './AddNewTodo'
import Calendar from './Calendar'
import Projects from './Projects'
import Todos from './Todos'
import EditTodo from './EditTodo'
import { SearchBar } from './SearchBar';
import { SearchResultsList } from './SearchResultsList';
import { useState } from 'react';

function FinalCalender() { 

    const [results, setResults] = useState([]);
    
    return ( 
        <div className = 'FinalCalender'>
            
            <Sidebar>
                <User />
                <AddNewTodo />
                <Calendar />
                <Projects />
             </Sidebar>
            <Main>
                <div className='search-bar-container'>
                    <SearchBar setResults={setResults}/>
                    <SearchResultsList results ={results}/>
                 </div>
                 <Todos />
                 <EditTodo />
             </Main>
             
        </div>
    );
}

export default FinalCalender