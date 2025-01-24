import mongoose from 'mongoose';

const layoutSchema = new mongoose.Schema({
    block_name: {
        type: String,
        required: true,
        enum: ['V', 'SR', 'CV']  // Only allow these block names
    },
    floor: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    room_number: {
        type: String,
        required: true,
        match: /^[1-5][0-9]{2}$/  // Validate room number format (101-510)
    }
});

const Layout = mongoose.model('Layout', layoutSchema);

export default Layout;