import Timetable from "./model/TeacherTimeTableModel.js";

const timetableData = [
    // Data for Teacher 1
    { name: "Jayesh", starting_time: '9:00', ending_time: '10:00', block_name: 'V', floor: 1, room_number: '101', date: 'Monday' },
    { name: "Jayesh", starting_time: '11:00', ending_time: '12:00', block_name: 'V', floor: 1, room_number: '102', date: 'Monday' },
    { name: "Jayesh", starting_time: '14:00', ending_time: '15:00', block_name: 'V', floor: 1, room_number: '103', date: 'Monday' },
    { name: "Jayesh", starting_time: '9:00', ending_time: '10:00', block_name: 'V', floor: 1, room_number: '104', date: 'Tuesday' },
    { name: "Jayesh", starting_time: '10:00', ending_time: '11:00', block_name: 'V', floor: 1, room_number: '105', date: 'Wednesday' },
    
    // Data for Teacher 2
    {name : "BB", starting_time: '9:00', ending_time: '10:00', block_name: 'SR', floor: 2, room_number: '201', date: 'Monday' },
    {name : "BB", starting_time: '10:00', ending_time: '11:00', block_name: 'SR', floor: 2, room_number: '202', date: 'Tuesday' },
    {name : "BB", starting_time: '13:00', ending_time: '14:00', block_name: 'SR', floor: 2, room_number: '203', date: 'Wednesday' },
    {name : "BB", starting_time: '14:00', ending_time: '15:00', block_name: 'SR', floor: 2, room_number: '204', date: 'Thursday' },
    {name : "BB", starting_time: '15:00', ending_time: '16:00', block_name: 'SR', floor: 2, room_number: '205', date: 'Friday' },
    
    // Data for Teacher 3
    { name : "Muthu" ,starting_time: '9:00', ending_time: '10:00', block_name: 'V', floor: 3, room_number: '301', date: 'Monday' },
    { name : "Muthu" ,starting_time: '10:00', ending_time: '11:00', block_name: 'V', floor: 3, room_number: '302', date: 'Tuesday' },
    { name : "Muthu" ,starting_time: '12:00', ending_time: '13:00', block_name: 'V', floor: 3, room_number: '303', date: 'Wednesday' },
    { name : "Muthu" ,starting_time: '14:00', ending_time: '15:00', block_name: 'V', floor: 3, room_number: '304', date: 'Thursday' },
    { name : "Muthu" ,starting_time: '15:00', ending_time: '16:00', block_name: 'V', floor: 3, room_number: '305', date: 'Friday' },
    
    // Data for Teacher 4
    { name : "Shivangi",starting_time: '9:00', ending_time: '10:00', block_name: 'CV', floor: 1, room_number: '401', date: 'Monday' },
    { name : "Shivangi",starting_time: '11:00', ending_time: '12:00', block_name: 'CV', floor: 1, room_number: '402', date: 'Tuesday' },
    { name : "Shivangi",starting_time: '13:00', ending_time: '14:00', block_name: 'CV', floor: 1, room_number: '403', date: 'Wednesday' },
    { name : "Shivangi" ,starting_time: '15:00', ending_time: '16:00', block_name: 'CV', floor: 1, room_number: '404', date: 'Thursday' },
    { name : "Shivangi" ,starting_time: '10:00', ending_time: '11:00', block_name: 'CV', floor: 1, room_number: '405', date: 'Friday' },

    // Data for Teacher 5 to 10
    { name : "Ayush" ,starting_time: '9:00', ending_time: '10:00', block_name: 'CV', floor: 2, room_number: '501', date: 'Monday' },
    { name : "Ayush" ,starting_time: '10:00', ending_time: '11:00', block_name: 'CV', floor: 3, room_number: '601', date: 'Tuesday' },
    { name : "Ayush" ,starting_time: '11:00', ending_time: '12:00', block_name: 'CV', floor: 1, room_number: '701', date: 'Wednesday' },
    { name : "Ayush" ,starting_time: '12:00', ending_time: '13:00', block_name: 'CV', floor: 2, room_number: '801', date: 'Thursday' },
    { name : "Ayush" ,starting_time: '13:00', ending_time: '14:00', block_name: 'CV', floor: 3, room_number: '901', date: 'Friday' },

    // Additional random data
    { name : "Harsh", starting_time: '9:00', ending_time: '10:00', block_name: 'V', floor: 1, room_number: '1001', date: 'Monday' },
    { name : "Harsh", starting_time: '11:00', ending_time: '12:00', block_name: 'V', floor: 2, room_number: '1101', date: 'Tuesday' },
    { name : "Harsh", starting_time: '13:00', ending_time: '14:00', block_name: 'V', floor: 3, room_number: '1201', date: 'Wednesday' },
    { name : "Harsh", starting_time: '14:00', ending_time: '15:00', block_name: 'V', floor: 1, room_number: '1301', date: 'Thursday' },
    { name : "Harsh", starting_time: '15:00', ending_time: '16:00', block_name: 'V', floor: 2, room_number: '1401', date: 'Friday' },
];

function addRandom() {
Timetable.insertMany(timetableData)
    .then(() => {
        console.log('Timetable data inserted successfully!');
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });

}

export default addRandom