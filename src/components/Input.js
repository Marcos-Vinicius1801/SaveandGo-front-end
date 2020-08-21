import React from "react";

const Input = ({
  id,
  type,
  label,
  htmlFor,
  value,
  placeholder,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <>
      <label id={id} type={type} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        name={id}
        onChange={onChange}
        onBlur={onBlur}
      />

      {error && <p className="input-error">{error}</p>}
    </>
  );
};

export default Input;