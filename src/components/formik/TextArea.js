import React from "react";
import { useField } from "formik";

const TextArea = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="field">
      <textarea
        cols="30"
        rows="5"
        className={`${props.className ? props.className : ""}`}
        {...field}
        {...props}
      />
      {/*      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}*/}
    </div>
  );
};
export default TextArea;
