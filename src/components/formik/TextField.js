import React from "react";
import { useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="field">
      <input
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
export default TextField;
