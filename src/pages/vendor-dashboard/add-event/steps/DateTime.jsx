import { Field } from "formik";

const DateTime = () => {
  return (
    <div>
      <h2>Set Location and Date</h2>
      <Field name="location" placeholder="Location" />
      <Field type="date" name="date" />
    </div>
  );
};

export default DateTime;
