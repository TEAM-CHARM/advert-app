import { Field } from "formik";
const TitleDescription = () => {
  return (
    <div>
      <h2>Add Title and Description</h2>
      <Field name="title" placeholder="Event Title" />
      <Field as="textarea" name="description" placeholder="Event Description" />
    </div>
  );
};

export default TitleDescription;
