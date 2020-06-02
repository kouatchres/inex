import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Error from '../ErrorMessage'
import { getAllRegionsOfACountryQuery } from '../queries&Mutations&Functions/Queries'
import Select from 'react-select'
import { customStyle } from '../formikForms/FormInputs'



const RegionDropDown = ({ theCountry }) => {

    console.log(theCountry);
    const { data, loading, error } = useQuery(getAllRegionsOfACountryQuery, { variables: { id: theCountry.id } })
    { loading && <p>Loading regions from DB...</p> }
    { error && <Error error={error} /> }
    const getCountry = data.country
    const { region } = { ...getCountry }
    console.log(region);
    const getRegionsOptions = region.map((item) => ({
        value: item.id, label: item.regName
    }))

    return (
        <div>

            <Select
                name="region"
                options={getRegionsOptions}
                styles={customStyle} />

        </div>
    )
}
export default RegionDropDown