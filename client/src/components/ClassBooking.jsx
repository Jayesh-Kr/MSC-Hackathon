import { useEffect, useState } from "react";
import "./ClassBooking.css";
import axios from "axios";

// Popup Component
// eslint-disable-next-line react/prop-types
const BookingPopup = ({ room, onClose, onBook, startTime, endTime }) => {
  const [selectedStartTime, setSelectedStartTime] = useState(startTime);
  const [selectedEndTime, setSelectedEndTime] = useState(endTime);

  const handleBooking = () => {
    // You can add an API call to save the booking data here
    onBook(room, selectedStartTime, selectedEndTime);
    onClose(); // Close the popup after booking
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Book Room {room.room_number}</h2>
        <label>Start Time:</label>
        <input
          type="time"
          value={selectedStartTime}
          onChange={(e) => setSelectedStartTime(e.target.value)}
        />
        <br />
        <label>End Time:</label>
        <input
          type="time"
          value={selectedEndTime}
          onChange={(e) => setSelectedEndTime(e.target.value)}
        />
        <br />
        <button onClick={handleBooking}>Book</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

const ClassBooking = () => {
  const [roomStatuses, setRoomStatuses] = useState([]);
  const [teacherBookings, setTeacherBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookedRooms, setBookedRooms] = useState([]); // State for booked rooms

  // Fetch data from localStorage
  const ll = JSON.parse(localStorage.getItem("room")) || {
    selectedFloor: 1,
    selectedBuilding: "V",
    weekday: "Monday",
    startTime: "09:00",  // Default start time
    endTime: "10:00",    // Default end time
  };

  useEffect(() => {
    const fetchData = async () => {
      await getRoomLayout();
      await getTeacherBookings();
      setLoading(false);
    };
    fetchData();
  }, []);

  const getRoomLayout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/timetable/getLayout",
        {
          block_name: ll.selectedBuilding,
          floor: ll.selectedFloor,
        }
      );
      setRoomStatuses(response.data.layout);
    } catch (error) {
      console.error("Error fetching room layout:", error);
      alert("Failed to fetch room layout. Please try again later.");
    }
  };

  const getTeacherBookings = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/timetable/timetable2",
        {
          block_name: ll.selectedBuilding,
          floor: ll.selectedFloor,
          date: ll.weekday,
        }
      );
      setTeacherBookings(response.data.timetable);
    } catch (error) {
      console.error("Error fetching teacher bookings:", error);
      alert("Failed to fetch teacher bookings. Please try again later.");
    }
  };

  const isRoomOccupied = (roomNumber) => {
    return teacherBookings.some((booking) => {
      const bookingStart = new Date(`1970-01-01T${booking.starting_time.padStart(5, "0")}:00`);
      const bookingEnd = new Date(`1970-01-01T${booking.ending_time.padStart(5, "0")}:00`);
      const checkStart = new Date(`1970-01-01T${ll.startTime.padStart(5, "0")}:00`);
      const checkEnd = new Date(`1970-01-01T${ll.endTime.padStart(5, "0")}:00`);

      return (
        booking.room_number === roomNumber &&
        booking.date === ll.weekday &&
        checkStart >= bookingStart &&
        checkEnd <= bookingEnd
      );
    });
  };

  const handleRoomClick = (room) => {
    if (!isRoomOccupied(room.room_number) && !bookedRooms.includes(room.room_number)) {
      setSelectedRoom(room);
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedRoom(null);
  };

  const handleBooking = (room, startTime, endTime) => {
    console.log(`Room ${room.room_number} booked from ${startTime} to ${endTime}`);
    setBookedRooms((prevBookedRooms) => [...prevBookedRooms, room.room_number]); // Add the booked room to state
    alert(`Room ${room.room_number} booked successfully!`);
  };

  const renderRoom = (room) => {
    const isOccupied = isRoomOccupied(room.room_number);
    const isBooked = bookedRooms.includes(room.room_number); // Check if the room is booked
    return (
      <div
        key={room.room_number}
        className={`room ${isOccupied || isBooked ? "occupied" : "available"}`}
        onClick={() => handleRoomClick(room)} // Add click event here
      >
        {room.room_number}
      </div>
    );
  };

  const renderRooms = () => {
    if (loading) {
      return <div>Loading rooms...</div>;
    }

    if (!roomStatuses || roomStatuses.length === 0) {
      return <div>No rooms found for the selected floor and building.</div>;
    }

    const leftColumnRooms = roomStatuses.filter((_, index) => index % 2 === 0);
    const rightColumnRooms = roomStatuses.filter((_, index) => index % 2 !== 0);

    return (
      <div className="floor-layout">
        <div className="column">{leftColumnRooms.map(renderRoom)}</div>
        <div className="column">{rightColumnRooms.map(renderRoom)}</div>
      </div>
    );
  };

  return (
    <div className="room-booking-container">

      {renderRooms()}

      {showPopup && selectedRoom && (
        <BookingPopup
          room={selectedRoom}
          onClose={handleClosePopup}
          onBook={handleBooking}
          startTime={ll.startTime}
          endTime={ll.endTime}
        />
      )}
    </div>
  );
};

export default ClassBooking;
