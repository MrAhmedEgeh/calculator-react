import React from 'react';
import './Results.css';

const Results = ({inputs, result}) =>{

    return(
        <div className="results">
            <div className="input">{inputs}</div>
            <div className="final-result">{result}</div>
        </div>
    );
}

export default Results;