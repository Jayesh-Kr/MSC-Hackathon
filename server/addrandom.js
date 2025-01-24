import Timetable from "./model/TeacherTimeTableModel.js";

const timetableData = [
    // Data for Teacher 1
    { starting_time: '9:00', ending_time: '10:00', block_name: 'V', floor: 1, room_number: '101', date: 'Monday' },
    { starting_time: '11:00', ending_time: '12:00', block_name: 'V', floor: 1, room_number: '102', date: 'Monday' },
    { starting_time: '14:00', ending_time: '15:00', block_name: 'V', floor: 1, room_number: '103', date: 'Monday' },
    { starting_time: '9:00', ending_time: '10:00', block_name: 'V', floor: 1, room_number: '104', date: 'Tuesday' },
    { starting_time: '10:00', ending_time: '11:00', block_name: 'V', floor: 1, room_number: '105', date: 'Wednesday' },
    
    // Data for Teacher 2
    { starting_time: '9:00', ending_time: '10:00', block_name: 'SR', floor: 2, room_number: '201', date: 'Monday' },
    { starting_time: '10:00', ending_time: '11:00', block_name: 'SR', floor: 2, room_number: '202', date: 'Tuesday' },
    { starting_time: '13:00', ending_time: '14:00', block_name: 'SR', floor: 2, room_number: '203', date: 'Wednesday' },
    { starting_time: '14:00', ending_time: '15:00', block_name: 'SR', floor: 2, room_number: '204', date: 'Thursday' },
    { starting_time: '15:00', ending_time: '16:00', block_name: 'SR', floor: 2, room_number: '205', date: 'Friday' },
    
    // Data for Teacher 3
    { starting_time: '9:00', ending_time: '10:00', block_name: 'V', floor: 3, room_number: '301', date: 'Monday' },
    { starting_time: '10:00', ending_time: '11:00', block_name: 'V', floor: 3, room_number: '302', date: 'Tuesday' },
    { starting_time: '12:00', ending_time: '13:00', block_name: 'V', floor: 3, room_number: '303', date: 'Wednesday' },
    { starting_time: '14:00', ending_time: '15:00', block_name: 'V', floor: 3, room_number: '304', date: 'Thursday' },
    { starting_time: '15:00', ending_time: '16:00', block_name: 'V', floor: 3, room_number: '305', date: 'Friday' },
    
    // Data for Teacher 4
    { starting_time: '9:00', ending_time: '10:00', block_name: 'CV', floor: 1, room_number: '401', date: 'Monday' },
    { starting_time: '11:00', ending_time: '12:00', block_name: 'CV', floor: 1, room_number: '402', date: 'Tuesday' },
    { starting_time: '13:00', ending_time: '14:00', block_name: 'CV', floor: 1, room_number: '403', date: 'Wednesday' },
    { starting_time: '15:00', ending_time: '16:00', block_name: 'CV', floor: 1, room_number: '404', date: 'Thursday' },
    { starting_time: '10:00', ending_time: '11:00', block_name: 'CV', floor: 1, room_number: '405', date: 'Friday' },

    // Data for Teacher 5 to 10
    { starting_time: '9:00', ending_time: '10:00', block_name: 'CV', floor: 2, room_number: '501', date: 'Monday' },
    { starting_time: '10:00', ending_time: '11:00', block_name: 'CV', floor: 3, room_number: '601', date: 'Tuesday' },
    { starting_time: '11:00', ending_time: '12:00', block_name: 'CV', floor: 1, room_number: '701', date: 'Wednesday' },
    { starting_time: '12:00', ending_time: '13:00', block_name: 'CV', floor: 2, room_number: '801', date: 'Thursday' },
    { starting_time: '13:00', ending_time: '14:00', block_name: 'CV', floor: 3, room_number: '901', date: 'Friday' },

    // Additional random data
    { starting_time: '9:00', ending_time: '10:00', block_name: 'V', floor: 1, room_number: '1001', date: 'Monday' },
    { starting_time: '11:00', ending_time: '12:00', block_name: 'V', floor: 2, room_number: '1101', date: 'Tuesday' },
    { starting_time: '13:00', ending_time: '14:00', block_name: 'V', floor: 3, room_number: '1201', date: 'Wednesday' },
    { starting_time: '14:00', ending_time: '15:00', block_name: 'V', floor: 1, room_number: '1301', date: 'Thursday' },
    { starting_time: '15:00', ending_time: '16:00', block_name: 'V', floor: 2, room_number: '1401', date: 'Friday' },
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