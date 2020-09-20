// ViewCounter.js
import React, { useEffect, useState } from 'react';
import firebase from 'gatsby-plugin-firebase';
import incrementViews from '../../lib/increment-views';
import PropTypes from "prop-types";

const ViewCounter = ({ id }) => {
  const [viewCount, setViewCount] = useState('');

  useEffect(() => {
    // 1 is displayed for a split second and then the correct count
    // This is a workaround
    const onViews = (newViews) => {
      setViewCount(newViews.val() === 1 ? 0 : newViews.val());
    };

    incrementViews(id);

    firebase.database().ref(`/views`).child(id).on(`value`, onViews);

    return () => {
      if (firebase.database()) {
        firebase.database().ref(`/views`).child(id).off(`value`, onViews);
      }
    };
  }, [id]);

  return (
    <div style={{ color: '#7e7e7e' }}>
      <button className="bg-teal-300 text-black-800 p-2 rounded  leading-none flex items-center">
          Visitas: <span className="bg-white p-1 rounded text-teal-600 text-xs ml-2">{viewCount ? viewCount : `---`}</span>
      </button>
    </div>

  );
};

export default ViewCounter;


ViewCounter.propTypes = {
  
  id: PropTypes.node.isRequired
};