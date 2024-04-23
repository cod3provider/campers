import Container from "../../components/common/Container/Container.jsx";
import { useEffect } from "react";
import CardsList from "../../components/CardsList/CardsList.jsx";
import Filter from "@/components/Filter/Filter.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectPage } from "@/store/selectors.js";
import { fetchCampers } from "@/store/operations.js";
import { setFilter } from "@/store/filter/filterSlice.js";
import { setPage } from "@/store/campers/campersSlice.js";

const Catalog = (props) => {
  const dispatch = useDispatch();
  const { campers, isShowBtn } = useSelector(selectCampers);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleFilter = (data) => {
    dispatch(setPage(1));
    dispatch(setFilter(data));
  };

  const handleClick = () => {
    console.log(page);
    dispatch(setPage(page + 1));
    console.log(page);
  };

  return (
    <Container>
      Catalog
      {/*<aside>*/}
      <Filter />
      {/*</aside>*/}
      <CardsList campers={campers} />
      {isShowBtn && <button onClick={handleClick}>Load more</button>}
    </Container>
  );
};

export default Catalog;
