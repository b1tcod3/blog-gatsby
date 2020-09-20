import React from 'react'
import PropTypes from 'prop-types'

const ButtonBadge = ({title, value, color , url }) => (
 
<a href={url} type="button" className={`text-xs m-1 italic bg-blue-600 hover:bg-gray-100 hover:text-gray-700 hover:border-red-500 border-2 text-white p-2 rounded-full leading-none ${color}`} >
          {title} <span className="bg-white p-1 rounded text-blue-600 text-xs ml-2">{value}</span>
</a>    
)

ButtonBadge.propTypes = {
 title: PropTypes.string,
 value: PropTypes.string,
 color: PropTypes.string,
 url: PropTypes.string,
}

export default ButtonBadge