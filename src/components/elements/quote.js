import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({quote, author }) => (
 
 <div >
  <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
            {quote}
          </blockquote>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – {author}
          </cite>
  </div>        
)

Quote.propTypes = {
 quote: PropTypes.string,
 author: PropTypes.string,
}

export default Quote