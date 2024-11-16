import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RoomsScreen.scss";
import { useEffect, useRef } from "react";
import io from 'socket.io-client';
import { socketEvents } from "utils/packet";
import store from "store/store";
import { gameModes, rooms } from "utils/constant";
import { socketServerPort } from "configuration";
import RoomCard from "./RoomCard";

const RoomsScreen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const socket = useRef(null); // Used useRef for socket instead of state to avoid unnecessary re-renders

  const updateSocket = store(state => state.updateSocket);

  const handleRoomClick = (roomName) => {
    if (roomName !== 'Classic Room') return;

    const { username, friendMatch } = state
    const data = {
      roomName,
      username,
      friendMatch
    };
    const event = friendMatch ? socketEvents["CS_CreateRoom"] : socketEvents["CS_MatchPlayLogin"];
    socket.current.emit(event, data);
  }

  const handleRoomCreated = (params) => {
    const { roomId, roomName, roomKey } = params;

    const stateData = {
      mode: gameModes['P2P'],
      friendMatch: state.friendMatch,
      username: state.username,
      roomName,
      roomId,
      roomKey,
    }
    const destination = roomName === "Classic Room" && state.friendMatch ? "/gameScene" : "/connect";
    navigate(destination, { state: stateData });
  }

  useEffect(() => {
    const skt = io.connect(`http://${window.location.hostname}:${socketServerPort}`);
    socket.current = skt;
    skt.on(socketEvents['SC_RoomCreated'], handleRoomCreated);
    updateSocket(skt);

    return () => {
      skt.disconnect();
    };
  }, []);

  return (
    <div
      className="rooms"
    >
      <div className="rooms-container">
        <div className="rooms-container-header">1 VS 1 MODE</div>
        <div className="rooms-container-content">
          <p className="rooms-container-content-desc">There are 5 different rooms. Two players each put in the specified amount of LLG (based on the room type) into a pool. After each game, whoever wins the game takes all the LLG in the pool.</p>
          <div className="rooms-container-content-rooms">
            {rooms.map((room, index) => (
              <RoomCard key={index} room={room} isDisabled={room.name !== "Classic Room"} onClick={() => handleRoomClick(room.name)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomsScreen;
