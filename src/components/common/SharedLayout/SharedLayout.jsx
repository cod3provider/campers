import Container from "../Container/Container.jsx";
import {Suspense} from "react";
import {Outlet} from "react-router-dom";

const SharedLayout = () => {
	return (
		<Container>
			<header></header>
			<Suspense fallback={<p>...Loading</p>}>
				<Outlet />
			</Suspense>
		</Container>
	)
}

export default SharedLayout;
