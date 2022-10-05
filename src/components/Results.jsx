import React from 'react';

const Results = ({ results }) => {
    if (!results) {
        return <h2>No Results</h2>
    }
    return (
        <div>
            <h1>Title: {results.title}</h1>
            <img src={`${results.thumbnail.path}.${results.thumbnail.extension}`}/> 
            <h2>Description: {results.description}</h2>

        </div>
       
    );
}

export default Results;