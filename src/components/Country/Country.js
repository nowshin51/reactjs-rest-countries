import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    const {area, region, population, name, flags} = props.country;
    return (
        <div className='country'>
            <h3>Name :{name.common}</h3>
            <img src={flags.png} alt=""/>
            <p>Population : {population}</p>
            <p><small>Area : {area}</small></p>
            <p><small>Region : {region}</small></p>
        </div>
    );
};

export default Country;