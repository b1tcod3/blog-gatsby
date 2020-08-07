import React from 'react'
import PropTypes from 'prop-types'

const colorType={
	danger: 'red',
	success: 'green',
 }

const Alert = ({title, message, type }) => (
 
<div className={`bg-${colorType[type]}-100 border my-2 border-${colorType[type]}-400 text-${colorType[type]}-700 px-4 py-3 rounded relative`} role="alert">
  <strong className="font-bold">{title}{` `}</strong>
  <span className="block sm:inline break-all">{message}</span>
</div>       
)

Alert.propTypes = {
 title: PropTypes.string,
 message: PropTypes.string,
 type: PropTypes.string,
}

export default Alert