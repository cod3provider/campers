import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import EquipmentBtn from '../common/EquipmentBtn';
import Button from '../common/Button';
import Input from './Input';

import styles from './FilterForm.module.scss';

import { selectFilter } from '@/store/selectors.js';

const FilterForm = ({ onSubmit }) => {
  const filterData = useSelector(selectFilter);
  const { register, handleSubmit, setValue, getValues } = useForm({
    defaultValues: filterData,
  });

  const handleEquipmentBtnClick = ({ currentTarget: button }) => {
    let text = button.textContent;
    const currentDetails = getValues('details');
    const isExist = currentDetails.includes(text);

    if (isExist) {
      button.classList.remove(styles.active);
      const updatedDetails = currentDetails.filter(detail => detail !== text);
      setValue('details', updatedDetails);
    } else {
      button.classList.add(styles.active);
      const updatedDetails = [...currentDetails, text];
      setValue('details', updatedDetails);
    }
  };

  const handleTypeBtnClick = ({ currentTarget: button }) => {
    const isNotActive = !button.classList.contains(styles.active);
    [...button.parentNode.children].forEach(button =>
      button.classList.remove(styles.active)
    );
    button.classList.toggle(styles.active, isNotActive);

    let text = button.textContent;
    if (text === 'Van') text = 'paneltruck';
    if (text === 'Fully Integrated') text = 'fullyintegrated';
    if (!isNotActive) text = '';
    setValue('type', text);
  };

  const equipmentBtns = ['AC', 'Automatic', 'Kitchen', 'TV', 'Shower/WC'];
  const typeBtns = ['Van', 'Fully Integrated', 'Alcove'];
  const checkIsActive = text => {
    if (filterData.type === 'paneltruck' && text === 'Van') return true;
    if (filterData.type === 'fullyintegrated' && text === 'Fully Integrated')
      return true;
    if (filterData.type === text) return true;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('location')}
        placeholder="Location"
        label="Location"
        type="text"
      />
      <p className={styles.smallText}>Filters</p>
      <h2 className={styles.title}>Vehicle equipment</h2>
      <div className={styles.filterBtnWrap}>
        {equipmentBtns.map((text, index) => (
          <EquipmentBtn
            key={index}
            text={text}
            handleClick={handleEquipmentBtnClick}
            isActive={filterData.details.includes(text) && styles.active}
          />
        ))}
      </div>
      <h2 className={styles.title}>Vehicle type</h2>
      <div className={`${styles.filterBtnWrap} ${styles.extraMargin}`}>
        {typeBtns.map((text, index) => (
          <EquipmentBtn
            key={index}
            text={text}
            handleClick={handleTypeBtnClick}
            isActive={checkIsActive(text) && styles.active}
          />
        ))}
      </div>
      <Button text={'Search'} type="submit" />
    </form>
  );
};

export default FilterForm;
