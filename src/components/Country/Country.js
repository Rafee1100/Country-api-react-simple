import React, { useEffect, useState } from 'react';

const Country = (props) => {
  
  const {name,population,capital,region,flag}=props.country

  const handleAddCountry=props.handleAddCountry
  const flagStyle={
    height:"80px",
    width:"120px"
  }
  const countryStyle = {
    border:'1px solid grey',
    margin:'10px',
    padding:'30ppx'
  }
    return (
        <div style={countryStyle} >
            This is <strong>{name}</strong>
            <br/><br/>
            <img style={flagStyle} src={flag} alt="" />
            <p>Population: {population}</p>
            <p>Capital: {capital}</p>
            <h5>Region: {region}</h5>
            <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
            <br/>
            <br/>
        </div>
    );
};

export default Country;