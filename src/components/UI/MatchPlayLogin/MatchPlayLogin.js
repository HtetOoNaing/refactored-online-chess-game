import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MatchPlayLogin.scss";
import Input from "components/Form/Input/Input";
import { gameModes } from "utils/constant";
import Layout from "../Layout/Layout";
import Button from "components/Form/Button/Button";

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
    <Layout className="MatchPlayLogin" ribbonText="Match matching game">
      <div className="u-content">
        <div className="u-logo"></div>
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Enter your name" value={name} onChange={handleInputChange} />
          <Button>
            Play
          </Button>
        </form>
      </div>
    </Layout>
  )
}

export default MatchPlayLogin;