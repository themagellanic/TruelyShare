require('dotenv').config();
const mongoose = require('mongoose');

// function connectDB(){
//     //to connect the database
//     mongoose.connect(process.env.MONGO_CONNECTION_URI, {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true});
//     const connection = mongoose.connection;

//     connection.once('open',()=>{
//         console.log('Database connected.');
//     }).catch(err =>{
//         console.log(`Connection failed ${err}`);
//     })
// }

// module.exports = connectDB;
const db = process.env.MONGO_CONNECTION_URI;

const connectDB = async() =>{
	try{
		await mongoose.connect(db,{
			useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:true
		});
		console.log("DB connected");

	}catch (err){
		console.error(err.message);
		process.exit(1);
	}
}

module.exports = connectDB;