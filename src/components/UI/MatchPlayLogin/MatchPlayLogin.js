import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MatchPlayLogin.scss";
import Input from "components/Form/Input";
import { gameModes } from "utils/constant";

export const MatchPlayLogin = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    navigate('/friendPlay/rooms', { state: { mode: gameModes['P2P'], username: name, friendMatch: false } });
  }

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="MatchPlayLogin">
      <div className="u-container">
        <div className="u-ribbon">Match matching game</div>
        <div className="u-content">
          <div className="u-logo"></div>
          <form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Enter your name" value={name} onChange={handleInputChange} />
            <div className="u-buttongroup">
              <button type="submit" className="u-button">Play</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MatchPlayLogin;