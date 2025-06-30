function Input({ name, label, id, textarea, ...props }) {
  let input = <input id={id} name={name} {...props}/>;

  if (textarea) {
    input = <textarea id={id} name={name} cols={30} rows={5} {...props} />;
  }

  return (
    <>
      <label htmlFor={id}>{label}:</label>
      {input}
    </>
  );
}

export default Input;
