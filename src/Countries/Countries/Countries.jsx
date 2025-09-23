import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        // console.log('I am here', country)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }

    const [visitedFlag, setVisitedFlag] = useState([]);

    const handleVisitedFlags = (flag) => {
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>In The All Countries: {countries.length}</h1>
            <h3>Total Visited Countries: {visitedCountries.length}</h3>
            <h3>Total Visited Flag: {visitedFlag.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flag-container'>
                {
                    visitedFlag.map((flag,index) =><img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries-container'>
            {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags ={handleVisitedFlags}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;