import React from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'

const Dropdown = ({breeds, breed, setBreed}) => {

  const breedsList = Object.keys(breeds);

  const handleChange = event => {

    setBreed(event.target.value);
  }

  return (
    <select
      className="py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600 ml-4 rounded-md mb-4 sm:mb-0"
      value={breed}
      onChange={handleChange}
    >
      <option value="">-- Selecciona --</option>
      { breedsList.map(breed => (
        <option
          key={shortid.generate()}
          value={breed}
        >{breed}</option>
      )) }
    </select>
  )
}

Dropdown.propTypes ={
  breeds: PropTypes.object.isRequired,
  breed: PropTypes.string.isRequired,
  setBreed: PropTypes.func.isRequired
}

export default Dropdown
