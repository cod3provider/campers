const Button = ({type = "button", onClick, className, text}) => {
	return (
		<button className={className} type={type} onClick={onClick}>
			{text}
		</button>
	)
}

export default Button;
