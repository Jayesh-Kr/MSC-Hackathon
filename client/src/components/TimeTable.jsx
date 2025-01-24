import "./timetable.css";
// eslint-disable-next-line react/prop-types
const TimeTable = ({timetable}) => {


  return (
    <div className="timetable-container">
      <h1 className="timetable-title">Timetable</h1>
      <table className="timetable-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Starting Time</th>
            <th>Ending Time</th>
            <th>Block</th>
            <th>Floor</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.date}</td>
              <td>{entry.starting_time}</td>
              <td>{entry.ending_time}</td>
              <td>{entry.block_name}</td>
              <td>{entry.floor}</td>
              <td>{entry.room_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TimeTable