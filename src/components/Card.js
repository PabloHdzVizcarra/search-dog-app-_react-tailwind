import React from 'react'
import PropTypes from 'prop-types'

const Card = ({image, breed}) => {
  return (
    <div className="m-auto">
        <a
          href={image}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={image}
            alt={breed}
            className="shadow-lg rounded "
          />
        </a>
    </div>
  )
}

Card.propTypes ={
  image: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
}

export default Card
