import { useSelector } from "react-redux";
import { selectFavorites, selectIsLoading } from "@/store/selectors.js";
import CardsList from "@/components/CardsList/CardsList.jsx";

const FavoritesPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const campers = useSelector(selectFavorites);

  return (
    <div>
      <h1 className="hidden">Favorites Page</h1>

      {/*{isLoading && <Loader />}*/}
      {!isLoading && <CardsList campers={campers} />}
    </div>
  );
};

export default FavoritesPage;
