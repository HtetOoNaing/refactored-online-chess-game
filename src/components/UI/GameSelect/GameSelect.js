import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GameSelect.scss";
import song from "assets/audio/gameselect.mp3";
import { gameModeItems } from "utils/constant";
import GameModeItem from "./GameModeItem";
import Layout from "../Layout/Layout";

const GameSelect = () => {
  const [playSong] = useSound(song);
  const navigate = useNavigate();

  const handleGameModeClick = (path) => {
    navigate(path);
    playSong();
  };

  return (
    <Layout className="GameSelect" ribbonText="Select game">

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

    </Layout>
  );
};

export default GameSelect;
