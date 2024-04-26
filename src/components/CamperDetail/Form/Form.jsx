import { useForm, Controller } from 'react-hook-form';
import Button from '../../common/Button';
import styles from './Form.module.scss';
import Input from './Input';
import DatePicker from './DatePicker';
import Textarea from './TextArea';

const ModalForm = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = () => {
    window.location.reload();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.text}>
        Stay connected! We are always ready to help you.
      </p>
      <div className={styles.inputList}>
        <Input
          {...register('name', { required: true })}
          type="text"
          name="name"
          placeholder="Name"
        />
        <Input
          {...register('email', { required: true })}
          name="email"
          type="email"
          placeholder="Email"
        />

        <Controller
          control={control}
          name="date"
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePicker onChange={onChange} onBlur={onBlur} selected={value} />
          )}
          rules={{
            required: true,
          }}
        />

        <Textarea
          {...register('comment')}
          name="comment"
          placeholder="Comment"
        />
      </div>
      <Button text="Send" type="submit" />
    </form>
  );
};

export default ModalForm;
