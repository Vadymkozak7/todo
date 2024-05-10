function Button({ onClick, title, disabled = false, children }) {
  return (
    <button className="btn" onClick={onClick} title={title} disabled={disabled}>
      {children}
    </button>
  );
}
export default Button;
