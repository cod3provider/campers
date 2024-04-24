import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import Button from "@/components/common/Button/Button.jsx";
import Datepicker from "@/components/Datepicker/Datepicker.jsx";

import s from "./OrderForm.module.scss";

const OrderForm = ({ onClose }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US");
  console.log("formattedDate", formattedDate);

  const initialState = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bookingDate: Yup.string().required("Booking date is required"),
  });

  const handleSubmit = (values, actions) => {
    actions.resetForm({
      values: { ...initialState, bookingDate: "" },
    });
    console.log(initialState);
    onClose();
    Notify.success("Thank you, your request has been submitted!");
  };

  return (
    <div className={s.formWrap}>
      <div className={s.formTextWrap}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ _, errors, touched }) => (
          <Form className={s.fieldsWrap}>
            <Field
              className={`${s.field} ${errors.name && touched.name ? s.error : ""}`}
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={s.errorMessage}
            />
            <Field
              className={`${s.field} ${errors.email && touched.email ? s.error : ""}`}
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={s.errorMessage}
            />
            <Field name="bookingDate">
              {({ field, form }) => (
                <>
                  <Datepicker
                    name="bookingDate"
                    onChange={(date) => form.setFieldValue("bookingDate", date)}
                  />
                  {/*<CustomDatepicker />*/}
                  {form.touched.bookingDate && form.errors.bookingDate ? (
                    <div className={s.errorMessage}>
                      {form.errors.bookingDate}
                    </div>
                  ) : null}
                </>
              )}
            </Field>
            <Field
              className={s.textarea}
              type="text"
              as="textarea"
              name="comment"
              placeholder="Comment"
            />
            <Button className={s.btn} text="Send" type="submit" tag="button" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
