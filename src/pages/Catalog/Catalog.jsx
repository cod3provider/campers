import Container from "../../components/common/Container/Container.jsx";
import {getCamperById, getCampers, PER_PAGE} from "@/utils/api/api.js";
import {useEffect, useState} from "react";
// import Button from "../../components/common/Button/Button.jsx";
import CardsList from "../../components/CardsList/CardsList.jsx";



const Catalog = (props) => {
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [adverts, setAdverts] = useState([]);

	useEffect(() => {
		const getItems = async () => {
			try {
				const campers = await getCampers(page);
				const totalCampers = campers.length;

				if (page === 1) {
					setTotalPages(Math.ceil(totalCampers / PER_PAGE));
				}
			}
			catch (err) {
				console.log(err);
			}
		}

		getItems();
	}, [page]);

	// const handleLoadMore = () => {
	// 	setPage(prevPage => prevPage + 1);
	// }
	//
	// const isLoadMore = adverts.length > 0 && page !== totalPages;

	// const renderPagination = () => {
	// 	const items = [];
	//
	// 	for (let i = 0; i <= totalPages; i += 1) {
	// 		items.push()
	// 	}
	// }

	return (
		<Container>
			Catalog
			<CardsList />
			{/*{isLoadMore && <Button text="Load more" onClick={handleLoadMore} />}*/}
		</Container>
	)
};

export default Catalog;
