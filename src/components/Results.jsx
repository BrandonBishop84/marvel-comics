import React from 'react';

const Results = ({ result }) => {
   
    if (!result) {
        return <h2>No Results</h2>
    }
    return (
    
        <div className='results'>
        <ul>
            <h1 className='title'>Title: {result.title}</h1>
            <img className='image' src={`${result.thumbnail.path}.${result.thumbnail.extension}`}/> 
             <p className='artist'>Artist: {result.creators.items[0].name}</p>
            <h2 className='description'>Description: {result.description}</h2>
        </ul>
        </div>
       
    );
}

export default Results;