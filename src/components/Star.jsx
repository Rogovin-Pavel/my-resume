import React from 'react';

const Star = ({rating}) =>

  [...Array(rating)].map((n, i) =>
    <div key={i} className="star"></div>
  )

  export default Star;