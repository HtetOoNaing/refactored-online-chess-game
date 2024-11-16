import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GameSelect.scss";
import song from "assets/audio/gameselect.mp3";
import { gameModeItems } from "utils/constant";
import GameModeItem from "components/GameModeItem";

const GameSelect = () => {
  const [playSong] = useSound(song);
  const navigate = useNavigate();

  const handleGameModeClick = (path) => {
    navigate(path);
    playSong();
  };

  return (
    <div className="GameSelect">
      <div className="u-container">
        <div className="u-ribbon">Select game</div>
        <div className="u-content">
          {gameModeItems.map((item, index) => (
            <GameModeItem
              key={index}
              label={item.label}
              image={item.image}
              onClick={() => handleGameModeClick(item.navigateTo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSelect;
