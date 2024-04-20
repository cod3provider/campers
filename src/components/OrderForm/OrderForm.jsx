import { Field, Form, Formik } from "formik";
import Datepicker from "@/components/Datepicker/Datepicker.jsx";

const OrderForm = () => {
  return (
    <div>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik>
        <Form>
          <div>
            <Field type="text" name="name" placeholder={"Name"} />
            <Field type="email" name="Email" placeholder="Email" />
            {/*<input type="text" placeholder="Boking date" />*/}
            <Datepicker />
            <Field type="text" as="textarea" placeholder="Comment" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;
