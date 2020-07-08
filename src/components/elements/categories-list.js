import React from 'react'
import './colors.css';

// Utilities
import kebabCase from "lodash/kebabCase"

import { Link } from "gatsby"

function CategoriesList(props) {

  return props.categories.map(category => (

	<Link to={`/c/${kebabCase(category)}/`} key={category}
	className={`w-1/3 text-center text-white rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3 category-${category}`}
	>
	{category}
	</Link>
  ));
}

export default CategoriesList