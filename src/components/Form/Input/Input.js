import "./Input.scss";

const Input = ({ type = "text", placeholder, value, onChange, className, containerClassName }) => {
  return (
    <div className={`u-input-wrap ${containerClassName}`}>
      <input
        className={`u-input ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;