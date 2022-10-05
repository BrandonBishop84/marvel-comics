import React from 'react';

const FirstIssue = ({ props }) => {
    console.log()
   if (!props) {
    return <h2>No Results</h2>
   }
    return (
        <div>
            <img src={`${props.thumbnail.path}.${props.thumbnail.extension}`}/>
        </div>
    );
}

export default FirstIssue;