import React from "react";

// ReviewItem1 accepts props for the data it needs to display
function ReviewItem1({ name, reviewText, date }) {
    return (
        <div className="review-item">
            <p>
                <strong>{name}</strong>
                {date && <span style={{ marginLeft: '10px', fontSize: '0.8em', color: '#ccc' }}>({date})</span>}
            </p>
            <p>
                "{reviewText}"
            </p>
        </div>
    );
}

export default ReviewItem1;