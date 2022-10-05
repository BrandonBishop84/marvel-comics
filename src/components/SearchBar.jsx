import React from 'react';

function SearchBar({ handleSubmit, handleChange, searchString }) {
    return (
        <div>
        

            <form className='form' onSubmit={handleSubmit}>
                <p>Enter Character Name</p>
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