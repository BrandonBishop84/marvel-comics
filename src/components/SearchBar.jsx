import React from 'react';

function SearchBar({ handleSubmit, handleChange, searchString }) {
    return (
        <div>

            <form className='form' onSubmit={handleSubmit}>
                <input 
                placeholder='Enter Marvel Character'
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