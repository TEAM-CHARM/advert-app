import { Field } from "formik";

const LocationPrice = () => {
  return (
    <div>
      <h2>Set Price</h2>
      <Field name="price" placeholder="Price" type="number" />
    </div>
  );
};

export default LocationPrice;
