import React from 'react';

const Results = ({ results }) => {
    if (!results) {
        return <h2>No Results</h2>
    }
    return (
        <div className='results'>
            <h1 className='title'>Title: {results.title}</h1>
            <img className='image' src={`${results.thumbnail.path}.${results.thumbnail.extension}`}/> 
             <p className='artist'>Artist: {results.creators.items[0].name}</p>
            <h2 className='description'>Description: {results.description}</h2>

        </div>
       
    );
}

export default Results;