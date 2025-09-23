import React, { useState } from 'react';
import './Country.css';

const Country = ({ country,handleVisitedCountries,handleVisitedFlags }) => {
    
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // Basic system
        // if (visited) {
        //     setVisited(false)
        // } else {
        //     setVisited(true)
        // }

        // second system
        // {
        //     setVisited(visited ? false : true);
        // }

        // Third system
        setVisited(!visited);
        handleVisitedCountries(country);
    };

    return (
        <div className={`country ${visited && 'visited-country'}`}>
            <h3><b>Name:</b> {country.name.common} <span className='capital'><b>Capital:</b> {country.capital.capital}</span></h3>
            
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            
            <p><b>Area:</b> {country.area.area} km (
                {country.area.area>300000? <b>Big Country</b> :<b>Small Country</b>}
            )</p>
            <p><b>Population:</b> {country.population.population}</p>
            
            <button onClick={handleVisited}>
                {visited? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={()=>handleVisitedFlags(country.flags.flags.png)} className='flag-btn' >Add Visited Flag</button>
        </div>
    );
};

export default Country;