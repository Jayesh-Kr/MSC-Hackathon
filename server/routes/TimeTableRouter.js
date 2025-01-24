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

timetablerouter.post('/getLayout', async(req, res) => {
    try {
        const { block_name, floor } = req.body;
        const layout = await Layout.find({ block_name, floor });
        if(!layout){
            res.status(404).json({"error" : "Layout not found"});
            return;
        }
        if(!layout){
            res.status(404).json({"error" : "Layout not found"});
            return;
        }
        res.status(200).json({"Success" : "Timetable retrieved successfully" , "layout" : layout});
    } catch (error) {
        res.status(500).json({'error':error.message});
    }
});

export default timetablerouter;

