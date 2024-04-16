import Container from "../Container/Container.jsx";
import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import Header from "../../Header/Header.jsx";

const SharedLayout = () => {
	return (
		<Container>
			<Header />

			<Suspense fallback={<p>...Loading</p>}>
				<Outlet />
			</Suspense>
		</Container>
	)
}

export default SharedLayout;
