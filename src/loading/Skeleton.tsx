import './Skeleton.css';

import React from 'react';

const Skeleton: React.FC = () => {
   const skeletonItems = Array.from({ length: 6 }, (_, index) => index);

  return (
    <div className="product-list">
      {skeletonItems.map((index) => (
        <div key={index} className="list-item">
          <div className="product-card-skeleton">
            {/* Image placeholder */}
            <div className="skeleton skeleton-image" />
            {/* Title placeholder */}
            <div className="skeleton skeleton-title" />
            {/* Price placeholder */}
            <div className="skeleton skeleton-price" />
          </div>
          {/* Button placeholder */}
          <div className="skeleton skeleton-button" />
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
