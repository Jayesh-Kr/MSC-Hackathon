import React, { useState } from 'react';
import './ClassBooking.css'; // Import CSS for styling

// Mock data for room statuses (true = occupied, false = available)
const initialRoomStatuses = {
  V201: false,
  V202: false,
  V203: false,
  V204: false,
  V205: true,
  V206: true,
  V207: false,
  V208: false,
  V209: true,
};

const RoomBooking = () => {
  const [roomStatuses, setRoomStatuses] = useState(initialRoomStatuses);

  return (
    <div className="floor-layout">
      {/* Left Column */}
      <div className="column">
        <div className={`room ${roomStatuses.V204 ? 'occupied' : 'available'}`}>V204</div>
        <div className={`room ${roomStatuses.V203 ? 'occupied' : 'available'}`}>NEXT TECH Lab<br />V203</div>
        <div className={`room ${roomStatuses.V202 ? 'occupied' : 'available'}`}>V202</div>
        <div className={`room ${roomStatuses.V201 ? 'occupied' : 'available'}`}>V201</div>
      </div>

      {/* Right Column */}
      <div className="column">
        <div className={`room ${roomStatuses.V205 ? 'occupied' : 'available'}`}>V205</div>
        <div className={`room ${roomStatuses.V206 ? 'occupied' : 'available'}`}>V206</div>
        <div className={`room ${roomStatuses.V207 ? 'occupied' : 'available'}`}>V207</div>
        <div className={`room ${roomStatuses.V208 ? 'occupied' : 'available'}`}>V208</div>
        <div className={`room ${roomStatuses.V209 ? 'occupied' : 'available'}`}>V209</div>
      </div>
    </div>
  );
};

export default RoomBooking;