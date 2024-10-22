import { Field } from "formik";
const ImageUpload = () => {
  return (
    <div>
      <h2>Upload Event Images</h2>
      <Field type="file" name="images" multiple />
    </div>
  );
};

export default ImageUpload;
