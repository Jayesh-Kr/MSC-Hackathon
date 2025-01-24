import express from 'express';
const userrouter = express.Router();
import User from '../model/UserModel.js';
import {z} from 'zod';
import bcrypt from 'bcrypt';

userrouter.post('/signup', async (req, res) => {
    try {
        const {universityID , name , email , password, contactNumber} = req.body;
        const reqCheck = z.object({
            name : z.string().min(4).max(100),
            email : z.string().min(4).max(100).email(),
            password : z.string().min(4)
        });
        const {success , error} = reqCheck.safeParse({name , email, password});
        if(!success){
                res.status(403).json({"error" : error.issues.map((e) => ({"field" : e.path[0] , "message" : e.message }))});
                return;
        }
        const hashPass = await bcrypt.hash(password, 5);
        await User.create({
            university_id : universityID,
            name,
            email,
            password : hashPass,
            phone_number : contactNumber
        });
        res.status(200).json({"Success" : "User Signed Up successfully"});
    } catch (error) {
        res.status(500).json({'error':error.message});
    }
});

userrouter.post('/login', async (req, res) => {
    try {
        const {email , password} = req.body;
        const reqCheck = z.object({
            email : z.string().min(4).max(100).email(),
            password : z.string().min(4)
        });
        const {success , error} = reqCheck.safeParse({email , password});
        if(!success){
                res.status(403).json({"error" : error.issues.map((e) => ({"field" : e.path[0] , "message" : e.message }))});
                return;
        }
        const user = await User.findOne({email});
        if(!user){
            res.status(404).json({"error" : "User not found"});
            return;
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.status(401).json({"error" : "Invalid Credentials"});
            return;
        }
        res.status(200).json({"Success" : "Login Successful"});
    } catch (error) {
        res.status(500).json({'error':error.message});
    }
});


userrouter.post('/user', async (req, res) => {
    try {
        const {email} = req.body;
        if(!email){
            res.status(401).json({"error" : "User not found"});
            return;
        }
        const response = await User.findOne({email});
        res.status(200).json({"Success" : "User retrieved successfully" , "user" : response});
    } catch (error) {
        res.status(500).json({'error':error.message});
    }
});

export default userrouter;  