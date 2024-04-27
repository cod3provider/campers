import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Container from "./components/Container/index.js";
import Header from "./components/Header/index.js";
import Loader from "./components/Loader/index.js";

const HomePage = lazy(
  () =>
    import("./pages/HomePage/HomePage.jsx" /* webpackChunkName: "home-page" */),
);
const CatalogPage = lazy(
  () =>
    import(
      "./pages/CatalogPage/CatalogPage.jsx" /* webpackChunkName: "catalog-page" */
    ),
);
const FavoritesPage = lazy(
  () =>
    import(
      "./pages/FavoritePage/FavoritesPage.jsx" /* webpackChunkName: "favorites-page" */
    ),
);

const App = () => (
  <Container>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  </Container>
);

export default App;
