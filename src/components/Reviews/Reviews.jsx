const Reviews = ({reviews}) => {
	console.log(reviews)
	return(
		<div>
			<ul>
				{reviews.map(({comment, reviewer_name, reviewer_rating}, idx) => <li key={idx}>
					<p>{comment}</p>
					<p>{reviewer_name}</p>
					<p>{reviewer_rating}</p>
				</li>)
				}
			</ul>
		</div>
	)
}

export default Reviews;
