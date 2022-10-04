import React from 'react';

const Results = ({ results }) => {
    if (!results) {
        return <h2>No Results</h2>
    }
    return (
        <div>
            <h1>results</h1>
         
            <img src={`${results.thumbnail.path}.${results.thumbnail.extension}`}/> 
          

        </div>
       
    );
}

export default Results;