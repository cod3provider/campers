import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/common/Container/Container.jsx";
import Button from "@/components/common/Button/Button.jsx";
import CardsList from "../../components/CardsList/CardsList.jsx";
import Filter from "@/components/Filter/Filter.jsx";

import { selectCampers, selectPage } from "@/store/selectors.js";
import { fetchCampers } from "@/store/operations.js";
import { setFilter } from "@/store/filter/filterSlice.js";
import { setPage } from "@/store/campers/campersSlice.js";

import s from "./Catalog.module.scss";
import Section from "@/components/common/Section/Section.jsx";

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
      <Section className={s.section}>
        {/*<aside>*/}
        <Filter />
        {/*</aside>*/}
        <div className={s.wrap}>
          <CardsList campers={campers} />
          {isShowBtn && (
            <Button className={s.btn} text="Load more" onClick={handleClick} />
          )}
        </div>
      </Section>
    </Container>
  );
};

export default Catalog;
