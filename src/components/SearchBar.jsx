import React from 'react';
import FirstIssue from './FirstIssue';

function SearchBar({ handleSubmit, handleChange, searchString}) {
    return (
        <div>
     
            <form onSubmit={handleSubmit}>
                <input 
                placeholder='Enter Marvel Character'
                type='text'
                name="searchString" 
                value={searchString}
                onChange={handleChange}/>
                <button type="submit">Submit
                </button>
            </form>

            <div>
                <button>
                    See First Issue!
                </button>
            </div>
            
        </div>
    );
}

export default SearchBar;