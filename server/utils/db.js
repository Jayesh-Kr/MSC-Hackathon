// require('dotenv').config()
import mongoose from 'mongoose';
(async()=>{
   await mongoose.connect("mongodb+srv://jayesh152005:2jPgE4r774kU6WDd@cluster0.gsxpl.mongodb.net/todo?retryWrites=true&w=majority");
    console.log("Connected to mongoDB");
})();

const db = mongoose.connection;
db.on('error' , (error) => {
    console.log(error);
})

db.once("open", () =>{
    console.log("Connected to MONGODB");
})
db.on('disconnected' , () => {
    console.log('Disconnected to MongoDB');
});

// module.exports = db;
export default db;