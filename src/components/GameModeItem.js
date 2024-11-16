
import { Image } from "react-bootstrap";

const GameModeItem = ({ label, image, onClick }) => (
  <div className="u-item" onClick={onClick}>
    <Image className="u-item-image" src={image} alt={label} />
    <div className="u-item-text">{label}</div>
  </div>
);

export default GameModeItem;