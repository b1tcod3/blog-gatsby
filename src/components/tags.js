import React from "react";
import PropTypes from "prop-types";

function Tags({ tags }) {

  const list_tags = tags
    .map(tag => <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>);

  return (

      <div className="px-6 pt-4 pb-2">
        {list_tags}
      </div>

  );
}

export default Tags;

Tags.propTypes = {
  tags: PropTypes.node.isRequired,
};


