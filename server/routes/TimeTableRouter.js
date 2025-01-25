import express from 'express';
const timetablerouter = express.Router();
import Timetable from '../model/TeacherTimeTableModel.js';
import Layout from '../model/ClassLayoutModel.js';

timetablerouter.post('/timetable', async(req, res) => {
    try {
        const {name} = req.body;
        const timetable = await Timetable.find({name});
        if(!timetable){
            res.status(404).json({"error" : "Timetable not found"});
            return;
        }
        res.status(200).json({"Success" : "Timetable retrieved successfully" , "timetable" : timetable});
    } catch (error) {
        res.status(500).json({'error':error.message});
    }
});

timetablerouter.post('/timetable2', async(req, res) => {
    try {
        const {block_name, floor, date} = req.body;
        const timetable = await Timetable.find({block_name, floor: parseInt(floor), date});
        if(!timetable || timetable.length === 0){
            res.status(404).json({"error" : "Timetable not found"});
            return;
        }
        res.status(200).json({"Success" : "Timetable retrieved successfully" , "timetable" : timetable});
    } catch (error) {
        res.status(500).json({'error':error.message});
    }
});
   

timetablerouter.post('/getLayout', async(req, res) => {
    try {
        const { block_name, floor } = req.body;
        // console.log("Received request:", { block_name, floor }); // Debug log
        const layout = await Layout.find({ block_name, floor: parseInt(floor) });
        // console.log("Found layout:", layout); // Debug log
        if(!layout){
            return res.status(404).json({"error" : "Layout not found"});
            
        }
        if(!layout || layout.length === 0){
            res.status(404).json({"error" : "Layout not found"});
            return;
        }
        res.status(200).json({"Success" : "Timetable retrieved successfully" , "layout" : layout});
    } catch (error) {
        res.status(500).json({'error':error.message});
    }
});

export default timetablerouter;

