import "./Button.scss"

const Button = ({ type = "submit", onClick, children }) => (
  <div className="u-buttongroup">
    <button type={type} className="u-button" onClick={onClick}>{children}</button>
  </div>
)

export default Button;