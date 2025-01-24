import { useEffect, useState } from 'react';
import './ClassBooking.css'; // Import CSS for styling
import axios from "axios";

const RoomBooking = () => {
  const [roomStatuses, setRoomStatuses] = useState([]); // Initialize as an empty array

  useEffect(() => {
    getLayout();
  }, []);
  

  const getLayout = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/timetable/getLayout", {
        block_name: "V",
        floor: 1,
      });
      setRoomStatuses(response.data.layout); // Update roomStatuses with response data
      console.log(response.data.layout);
    } catch (error) {
      console.log(error);
    }
  };

  const renderRoom = (room) => {
    const isOccupied = room.occupied; // Use "occupied" from response data
    return (
      <div key={room.room_number} className={`room ${isOccupied ? 'occupied' : 'available'}`}>
        {room.room_number}
      </div>
    );
  };

  const renderRooms = () => {
    if (!roomStatuses || roomStatuses.length === 0) {
      return <div>Loading rooms...</div>;
    }

    // Render rooms in two columns
    const leftColumnRooms = roomStatuses.filter((_, index) => index % 2 === 0);
    const rightColumnRooms = roomStatuses.filter((_, index) => index % 2 !== 0);

    return (
      <div className="floor-layout">
        <div className="column">
          {leftColumnRooms.map(renderRoom)}
        </div>
        <div className="column">
          {rightColumnRooms.map(renderRoom)}
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderRooms()}
    </div>
  );
};

export default RoomBooking;
