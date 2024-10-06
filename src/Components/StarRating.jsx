import React from 'react'
const Star = ({ filled, onClick }) => (
    <span
      className={`cursor-pointer ${filled ? 'text-yellow-500' : 'text-gray-300'}`}
      onClick={onClick}
    >
      ★
    </span>
  );



const StarRating = ({ rating, onRatingChange }) => {
    
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={star <= rating}
          onClick={() => onRatingChange(star)}
        />
      ))}
    </div>
  )
}

export default StarRating