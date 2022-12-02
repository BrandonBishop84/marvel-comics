import React from 'react';

function SearchBar({ handleSubmit, handleChange, searchString }) {
    return (
        <div>
            
            <form className='form' onSubmit={handleSubmit}>
                <input 
                type='text'
                placeholder='Try X-men or Black Panther'
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