import s from './Container.module.scss';

const Container = ({children, className = s.container}) => {
	return (
		<div className={className}>
			{children}
		</div>
	)
}

export default Container;
