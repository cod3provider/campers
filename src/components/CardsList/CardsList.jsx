import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCampers, selectFilter} from "../../store/selectors.js";
import {fetchCampers} from "../../store/operations.js";
import CardsItem from "./CardsItem/CardsItem.jsx";

import s from './CardsList.module.scss';

const CardsList = () => {

	const dispatch = useDispatch();
	const campers = useSelector(selectCampers);
	const filteredCampers = useSelector(selectFilter);

	useEffect(() => {
		dispatch(fetchCampers());
		console.log(dispatch(fetchCampers()))
	}, [dispatch]);

	// const getFilteredCampers = () => {
	// 	const filterNormalize = filteredCampers.toLowerCase();
	//
	// 	if(!filterNormalize) {
	// 		return campers;
	// 	}
	// 	return campers.filter(camper => camper.)
	// }

	return (
		<ul className={s.list}>
			{campers?.length ?
				campers.map(camper => (
				<CardsItem key={camper._id} camper={camper} />
			)) : <p>Not found</p>
			}
		</ul>
	)
}

export default CardsList;
