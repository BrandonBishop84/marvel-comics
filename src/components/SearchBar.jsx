import React from 'react';

function SearchBar({ handleSubmit, handleChange, searchString }) {
    return (
        <div>
        

            <form className='form' onSubmit={handleSubmit}>
                <h2>Enter Character Name</h2>
                <p>Try "X-men" or "Black Panther"</p>
                <input 
                type='text'
                name="searchString" 
                value={searchString}
                onChange={handleChange}/>
                <button type="submit">Submit
                </button>
            </form>
            
        </div>
    );
}

export default SearchBar;