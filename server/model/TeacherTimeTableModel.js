import mongoose from 'mongoose';

const timetableSchema = new mongoose.Schema({
    starting_time: {
        type: String,
        required: true
    },
    ending_time: {
        type: String,
        required: true
    },
    block_name: {
        type: String,
        required: true
    },
    floor: {
        type: Number,
        required: true
    },
    room_number: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Timetable = mongoose.model('Timetable', timetableSchema);
export default Timetable;
