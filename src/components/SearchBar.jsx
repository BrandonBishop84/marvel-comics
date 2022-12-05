import React from 'react';

function SearchBar({ handleSubmit, handleChange, searchString }) {
    return (
        <div>
            
            <form className='form' onSubmit={handleSubmit}>
                <input className='input'  
                type='text'
                placeholder='Try X-men or spider-man'
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