import {useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar
} from "@fortawesome/free-solid-svg-icons"; 
import axios from "axios";
import "./floorform.css";
import TimeTable from "./TimeTable";
import { useNavigate } from 'react-router-dom';

const FloorForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [id, setId] = useState("");
  const [activeTab, setActiveTab] = useState("profile");
  const [selectedDate, setSelectedDate] = useState('');
  const [weekday, setWeekday] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState('');
const [selectedFloor, setSelectedFloor] = useState('');
const [startTime, setStartTime] = useState('');
const [endTime, setEndTime] = useState('');
const [timetable, setTimetable] = useState([]);
const [teacherName, setTeacherName] = useState("");


const navigate = useNavigate();


async function getTimeTable(){
  try {
      const response = await axios.post("http://localhost:3000/api/timetable/timetable",{name : teacherName});
      setTimetable(response.data.timetable);
      console.log(response);
  } catch (error) {
      console.log(error);
  }
}

useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));
  setName(user.name);
  setEmail(user.email);
  setContact(user.phone_number);
  setId(user.university_id);
}, []);

  return (
    <div className="dashboard-container">

      <div className="sidebar">
        <img
          src="https://srmap.edu.in/file/2019/12/White.png"
          alt="Profile"
          className="profile-pic"
        />
        <h3>Faculty name</h3>
        <nav className="nav-menu">
          <ul>
            <li onClick={() => setActiveTab("book")}>
              <FontAwesomeIcon icon={faCalendar} className="icon" /> Book Slot
            </li>
            <li onClick={() => setActiveTab("faculty")}>
              <FontAwesomeIcon icon={faCalendar} className="icon" /> Faculty
            </li>
          </ul>
        </nav>
      </div>



      {/* Main Content */}
      <div className="main-content">

        <div className="jankari">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="patient-card">
              <div className="patient-info">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Contact: {contact}</p>
                <p>Id: {id}</p>
              </div>
            </div>
          )}
{
  activeTab === "faculty" && ( 
    <>
    <div className="faculty">
      <input 
      value={teacherName}
      onChange={(e) => setTeacherName(e.target.value)}
        type="text" 
        placeholder="Enter Teacher's Name" 
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            getTimeTable();
          }
        }}
      />
      <button 
        onClick={getTimeTable}
      >
        Search
      </button>
    </div>
    <TimeTable timetable={timetable}/>
    </>
  )
}
{activeTab === "book" && (
  <div className="slot-booking">
    <h3 id="book-heading">Book Slot</h3>

        {/* Date selection */}
        <input 
          type="date" 
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
            const date = new Date(e.target.value);
            const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            setWeekday(weekdays[date.getDay()]);
          }}
        />
    
    {/* Time slot selection */}
    <div className="time-slot">
      <input 
        type="time" 
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        placeholder="Start Time"
      />
      <span>to</span>
      <input 
        type="time" 
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        placeholder="End Time"
      />
    </div>


    {/* Weekday display */}
    <input 
      type="text" 
      value={weekday}
      readOnly
      placeholder="Weekday"
    />

        {/* Building Selection */}
        <select 
      value={selectedBuilding}
      onChange={(e) => setSelectedBuilding(e.target.value)}
    >
      <option value="">Select Building</option>
      <option value="A">V Block</option>
      <option value="B">SR Block</option>
      <option value="C">CV Raman Block</option>
    </select>

      {/* Floor Selection */}
      <select 
      value={selectedFloor}
      onChange={(e) => setSelectedFloor(e.target.value)}
    >
      <option value="">Select Floor</option>
      <option value="1">1st Floor</option>
      <option value="2">2nd Floor</option>
      <option value="3">3rd Floor</option>
      <option value="4">4th Floor</option>
      <option value="4">5th Floor</option>
    </select>
    <div className="btn" onClick={() => {localStorage.setItem("room", JSON.stringify(selectedFloor,selectedBuilding,weekday)); navigate('/timetable')}}>
        Book
        </div>
  </div>
)}


        </div>

      </div>
    </div>
  );
};

export default FloorForm;