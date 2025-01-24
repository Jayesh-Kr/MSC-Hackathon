import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar
} from "@fortawesome/free-solid-svg-icons"; 
import "./floorform.css";


const FloorForm = () => {
  const [patient, setPatient] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [hostelName, setHostelName] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [branch, setBranch] = useState("");
  const [gender, setGender] = useState("");




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
            <li onClick={() => setActiveTab("profile")}>
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
                <p>Name: {branch}</p>
                <p>Email: {hostelName}</p>
                <p>Contact: {roomNo}</p>
                <p>Id: {patient?.contactNumber}</p>
              </div>
            </div>
          )}

          {activeTab === "book" && (
            <div className="slot-booking">
              <h3>Book Slot</h3>
              <input type="text" placeholder="Date" />
              <select>
                <option>Weekday</option>
                <option>Saturday</option>
              </select>
              <select>
                <option>Morning</option>
                <option>Afternoon</option>
              </select>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>

              </select>
            </div>
          )}


        </div>

      </div>
    </div>
  );
};

export default FloorForm;