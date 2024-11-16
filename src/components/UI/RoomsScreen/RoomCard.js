const RoomCard = ({ room, isDisabled, onClick }) => (
  <div
    className={`rooms-container-content-room ${isDisabled ? "closed" : ""}`}
    style={{ backgroundImage: `url(${room.bg})` }}
    onClick={isDisabled ? undefined : onClick}
  >
    <div
      className="rooms-container-content-room-icon"
      style={{ backgroundImage: `url(${room.icon})` }}
    ></div>
    <div className="rooms-container-content-room-texts">
      <div className="rooms-container-content-room-name">{room.name}</div>
      <div className="rooms-container-content-room-pool">{room.pool}</div>
      <div className="rooms-container-content-room-desc">{room.desc}</div>
    </div>
  </div>
);

export default RoomCard;