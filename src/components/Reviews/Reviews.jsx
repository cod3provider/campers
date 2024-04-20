const Reviews = ({reviews}) => {
	console.log(reviews)
	return(
		<div>
			<p>Reviews</p>
			<ul>
				{reviews.map((review, idx) => <li key={idx}>
					<p>{review.comment}</p>
					<p>{review.reviewer_name}</p>
					<p>{review.reviewer_rating}</p>
				</li>)
				}
			</ul>
		</div>
	)
}

export default Reviews;
