import React from 'react';

const Results = ({ result }) => {
   
    if (!result) {
        return <h2>No Results</h2>
    }
    return (
    
        <div className='container'>
            <ul className='resultscard'>
                <li className='listitem'>
                    <h1 className='title'>Title: {result.title}</h1>
                    <img className='image' src={`${result.thumbnail.path}.${result.thumbnail.extension}`}/> 
                    {/* <h2 className='description'>Description: {result.description}</h2> */}
                </li>
            </ul>
        </div>
       
    );
}

export default Results;