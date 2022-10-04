import React from 'react';

const Results = (props) => {
    return (
        <div>
            <p>results</p>
            <p>{props.name}</p>
            <img src={`${props.character.path}.${props.character.extension}`}/>

        </div>
    );
}

export default Results;